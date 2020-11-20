import {belongsTo, createServer, Factory, hasMany, Model} from "miragejs"

const modified = new Date();

export default function makeServer({environment = "development"} = {}) {
    return createServer({
        environment,
        routes() {
            this.urlPrefix = 'https://api.cardapioh.com.br';
            this.namespace = 'api';
            this.get("/places", function () {
                return [{
                        "id": 1,
                        "name": "Kite Cabana Lounge",
                        "created": "2020-11-19T21:59:35.196575Z",
                        "modified": modified,
                        "phone": "(85) 98818-1966",
                        "address": "R. Olinto Feitosa Costa, s/n - Praia de Cumbuco, Caucaia - CE, 61619-110",
                        "image": "http://192.168.1.3:8000/media/places/kitekabana.jpg",
                        "user": null
                    }]

            })
            this.get("/places/:id", function () {
                return {
                    "id": 1,
                    "sessions": [
                        {
                            "id": 1,
                            "data": [
                                {
                                    "id": 1,
                                    "name": "Camarão ao alho e óleo (300 G)",
                                    "created": "2020-11-19T22:02:16.366266Z",
                                    "modified": modified,
                                    "code": "001",
                                    "description": "Camarão salteado ao azeite de oliva e alho",
                                    "description_english": "Whole shrimp fried in oil and garlic",
                                    "price": "45.00",
                                    "discount": null,
                                    "image": null,
                                    "session": 1
                                },
                                {
                                    "id": 2,
                                    "name": "Ensopadinho de caranguejo (150 G)",
                                    "created": "2020-11-19T22:44:14.332740Z",
                                    "modified": modified,
                                    "code": "002",
                                    "description": "Carne de caranguejo refogado com verduras e leite de coco",
                                    "description_english": "Minced crab meat garnished whith vegetables and coconut milk",
                                    "price": "29.00",
                                    "discount": null,
                                    "image": "http://192.168.1.3:8000/media/items/ensopadinho.jpg",
                                    "session": 1
                                }
                            ],
                            "name": "Entradas e Petiscos",
                            "created": "2020-11-19T21:59:41.472968Z",
                            "modified": "2020-11-19T22:52:11.970057Z",
                            "name_english": "Starters and Savory Snacks",
                            "place": 1
                        }
                    ],
                    "name": "Kite Cabana Lounge",
                    "created": "2020-11-19T21:59:35.196575Z",
                    "modified": modified,
                    "phone": "(85) 98818-1966",
                    "address": "R. Olinto Feitosa Costa, s/n - Praia de Cumbuco, Caucaia - CE, 61619-110",
                    "image": "http://192.168.1.3:8000/media/places/kitekabana.jpg",
                    "user": null
                }
            })
        },

    })
}