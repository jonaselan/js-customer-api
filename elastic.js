const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

async function createMessageIndex() {
    let messages_exist = await client.indices.exists({
        index: 'messages'
    });

    if (!messages_exist.body) {
        await client.indices.create({
            index: 'messages',
            include_type_name: false,
            body: {
                settings : {
                    "number_of_shards" : 1
                },
                mappings : {
                    "properties" : {
                        "id": { "type": "short" },
                        "from": { "type": "short" },
                        "to": { "type": "short" },
                        "read": { "type": "boolean" },
                        "content": { "type": "text" },
                        "created_at": { "type": "date" },
                        "updated_at": { "type": "date" },
                    }
                }
            }
        });
    }
}

async function createUserIndex() {
    let users_exist = await client.indices.exists({
        index: 'users'
    });

    if (!users_exist.body) {
        await client.indices.create({
            index: 'users',
            include_type_name: false,
            body: {
                settings : {
                    "number_of_shards" : 1
                },
                mappings : {
                    "properties" : {
                        "id": { "type": "short" },
                        "name": { "type": "text" },
                        "email": { "type": "keyword" },
                        "created_at": {
                            "type": "date",
                            "format": "yyyy-MM-dd HH:mm:ss",
                        },
                        "updated_at": {
                            "type": "date",
                            "format": "yyyy-MM-dd HH:mm:ss",
                        },
                    }
                }
            }
        });
    }
}

async function deleteIndex(name) {
    await client.indices.delete({
        index: name
    });
}

async function createDocumentsToIndex(index, document) {
    // await client.index({
//     index: 'users',
//     body: {
//         id: 100,
//         name: "user100",
//         email: "email1000@email.com",
//         created_at: "2019-03-15 17:18:56",
//         updated_at: "2019-03-15 17:18:56"
//     }
// });
//
// await client.index({
//     index: 'users',
//     body: {
//         id: 200,
//         name: "Giles Cruickshank Jr.",
//         email: "zkreiger@example.net",
//         created_at: "2019-03-28 12:52:39",
//         updated_at: "2019-03-28 12:52:39"
//     }
// });
}

async function elasticSearch(field = 'id', q) {
    // Let's search!
    // const { body } = await client.search({
    //     index: 'users',
    //     body: {
    //         query: {
    //             match: {
    //                 name: 'giles'
    //             }
    //         }
    //     }
    // });
    // console.log(body.hits.hits)
}

module.exports = {
    createMessageIndex,
    createUserIndex,
    deleteIndex,
    createDocumentsToIndex,
    elasticSearch,
};