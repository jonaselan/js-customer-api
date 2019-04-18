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
    await client.index({
        index: index,
        refresh: true,
        body: document
    });
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