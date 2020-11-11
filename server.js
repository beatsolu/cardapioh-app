import {belongsTo, createServer, Factory, hasMany, Model} from "miragejs"

const modified = new Date().toLocaleDateString();

export default function makeServer({environment = "development"} = {}) {
    return createServer({
        environment,
        models: {
            place: Model.extend({
                menus: hasMany()
            }),
            menu: Model.extend({
                place: belongsTo(),
            })
        },
        factories: {
            place: Factory.extend({
                id(i) {
                    return i + 1
                },
                name(i) {
                    return `Place ${i + 1}`
                },
                address(i) {
                    return `Street ${i + 1}`
                },
                modified,
                image: 'https://picsum.photos/300/200',
                afterCreate(place, server) {
                    server.createList('menu', 5, {place})
                }
            }),
            menu: Factory.extend({
                id(i) {
                    return i + 1
                },
                category(i) {
                    return `Category ${i + 1}`
                },
                data: [
                    {
                        code: 1,
                        name: 'One',
                        description: 'Description One',
                        price: 10,
                        discount: 10,
                        image: null

                    },
                    {
                        code: 2,
                        name: 'Two',
                        description: 'Description Two',
                        price: 20,
                        discount: 5,
                        image: 'https://picsum.photos/300/200'

                    },
                    {
                        code: 3,
                        name: 'Three',
                        description: 'Description Three',
                        price: 30,
                        discount: null,
                        image: 'https://picsum.photos/300/200'

                    }
                ],

            })
        },

        seeds(server) {
            server.createList('place', 10)
        },
        routes() {
            this.urlPrefix = 'https://api.cardapioh.com.br';
            this.namespace = 'api';
            this.get("/places", function (schema) {
                const places = schema.places.all()
                const json = this.serialize(places)
                return {
                    "count": json.places.length,
                    "next": null,
                    "previous": null,
                    "results": json.places
                }
            })
            this.get("/places/:id/menu", function (schema, request) {
                const place = schema.places.find(request.params.id)
                const json = this.serialize(place.menus)
                return {
                    "count": json.menus.length,
                    "next": null,
                    "previous": null,
                    "results": json.menus
                }
            })
        },

    })
}