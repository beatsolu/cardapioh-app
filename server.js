import {createServer} from "miragejs"

export function makeServer({environment = "development"} = {}) {
    return createServer({
        environment,
        routes() {
            this.urlPrefix = 'https://api.zecardapio.com.br'
            this.namespace = 'api';
            this.get("stores", () => [
                {id: "1", name: "Place 1", address: "Street One, 1", image: 'https://picsum.photos/300/200'},
                {id: "2", name: "Place 2", address: "Street Two, 2", image: 'https://picsum.photos/300/200'},
                {id: "3", name: "Place 3", address: "Street Three, 3", image: 'https://picsum.photos/300/200'},
            ]);
            this.get("stores/:id/menu", () => [
                {
                    category: 'One',
                    items: [
                        {
                            code: 1,
                            name: 'One',
                            description: 'Description One',
                            price: '$1',
                            discount: '10',
                            image: 'https://picsum.photos/300/200'

                        },
                        {
                            code: 2,
                            name: 'Two',
                            description: 'Description Two',
                            price: '$2',
                            discount: '20',
                            image: 'https://picsum.photos/300/200'

                        }
                    ]
                },
                {
                    category: 'Two',
                    items: [
                        {
                            code: 1,
                            name: 'One',
                            description: 'Description One',
                            price: '$1',
                            discount: '10',
                            image: 'https://picsum.photos/300/200'

                        },
                        {
                            code: 2,
                            name: 'Two',
                            description: 'Description Two',
                            price: '$2',
                            discount: '20',
                            image: 'https://picsum.photos/300/200'

                        }
                    ]
                },
                {
                    category: 'Three',
                    items: [
                        {
                            code: 1,
                            name: 'One',
                            description: 'Description One',
                            price: '$1',
                            discount: '10',
                            image: 'https://picsum.photos/300/200'

                        },
                        {
                            code: 2,
                            name: 'Two',
                            description: 'Description Two',
                            price: '$2',
                            discount: '20',
                            image: 'https://picsum.photos/300/200'

                        }
                    ]
                },
                {
                    category: 'Four',
                    items: [
                        {
                            code: 1,
                            name: 'One',
                            description: 'Description One',
                            price: '$1',
                            discount: '10',
                            image: 'https://picsum.photos/300/200'

                        },
                        {
                            code: 2,
                            name: 'Two',
                            description: 'Description Two',
                            price: '$2',
                            discount: '20',
                            image: 'https://picsum.photos/300/200'

                        }
                    ]
                }

            ])
        },
    })
}