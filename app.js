let express = require('express');
let db = require('./db.js');
const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

// Set up the express app
const app = express();

app.get('/', function(req, res) {
    res.status(200).send({
       data: 'All ready to go!'
    });
});

// get all messages
app.get('/api/conversation/random_messages', (req, res) => {
    res.status(200).send({
        success: 'true',
        data: db.getAllMessages()
    });
});

// get messages from conversation
app.get('/api/conversation/messages/:count', (req, res) => {
    res.status(200).send({
        success: 'true',
        data: db.getConversationMessages(req.params.count)
    });
});

// get all users
app.get('/api/conversation/users', (req, res) => {
    res.status(200).send({
        success: 'true',
        data: db.getUsersStatic()
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

async function run () {
    // delete a index
    // await client.indices.delete({
    //     index: 'messages'
    // });

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
                        "name": { "type": "short" },
                        "email": { "type": "text" },
                        "created_at": { "type": "date" },
                        "updated_at": { "type": "date" },
                    }
                }
            }
        });
    }

    // Let's search!
    // const { body } = await client.search({
    //     index: 'game-of-thrones',
    //     body: {
    //         query: {
    //             match: {
    //                 quote: 'winter'
    //             }
    //         }
    //     }
    // });
    //
    // console.log(body.hits.hits)
}

run().catch(console.log)