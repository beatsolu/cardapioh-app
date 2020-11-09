import {createServer} from "miragejs"

const modified = new Date().toLocaleDateString();

export function makeServer({environment = "development"} = {}) {
    return createServer({
        environment,
        routes() {
            this.urlPrefix = 'https://api.cardapioh.com.br';
            this.namespace = 'api';
            this.get("places", () => [
                {
                    id: "1",
                    name: "Place 1",
                    address: "Street One, 1",
                    modified: modified,
                    image: 'https://picsum.photos/300/200'
                },
                {
                    id: "2",
                    name: "Place 2",
                    address: "Street Two, 2",
                    modified: modified,
                    image: 'https://picsum.photos/300/200'
                },
                {
                    id: "3",
                    name: "Place 3",
                    address: "Street Three, 3",
                    modified: modified,
                    image: 'https://picsum.photos/300/200'
                },
                {
                    id: "4",
                    name: "Place 4",
                    address: "Street Four, 4",
                    modified: modified,
                    image: 'https://picsum.photos/300/200'
                },
                {
                    id: "5",
                    name: "Place 5",
                    address: "Street Five, 5",
                    modified: modified,
                    image: 'https://picsum.photos/300/200'
                },
                {
                    id: "6",
                    name: "Place 6",
                    address: "Street Six, 6",
                    modified: modified,
                    image: 'https://picsum.photos/300/200'
                },
                {
                    id: "7",
                    name: "Place 7",
                    address: "Street Seven, 7",
                    modified: modified,
                    image: 'https://picsum.photos/300/200'
                },
                {
                    id: "8",
                    name: "Place 8",
                    address: "Street Eight, 8",
                    modified: modified,
                    image: 'https://picsum.photos/300/200'
                },
                {
                    id: "9",
                    name: "Place 9",
                    address: "Street Nine, 9",
                    modified: modified,
                    image: 'https://picsum.photos/300/200'
                },
                {
                    id: "10",
                    name: "Place 10",
                    address: "Street Ten, 10",
                    modified: modified,
                    image: 'https://picsum.photos/300/200'
                },

            ]);
            this.get("places/:id/menu", () => [
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