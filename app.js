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

console.log('qqqqqqqqq');

async function run () {
    // Let's start by indexing some data
    await client.index({
        index: 'api-customers-js',
        type: 'messages',
        body: {
            "id": 1,
            "from": 7,
            "to": 4,
            "read": false,
            "content": "Omnis mollitia sint et dolores ut commodi.",
            "created_at": "2019-03-28 12:53:04",
            "updated_at": "2019-03-28 12:53:04"
        }
    });

    await client.index({
        index: 'api-customers-js',
        type: 'users',
        body: {
            "id":10,
            "name":"Tad Windler",
            "email":"ugerhold@example.com",
            "email_verified_at":null,
            "created_at":"2019-03-28 12:52:39",
            "updated_at":"2019-03-28 12:52:39"
        }
    });

    // Let's search!
    const { body } = await client.search({
        index: 'game-of-thrones',
        body: {
            query: {
                match: {
                    quote: 'winter'
                }
            }
        }
    });

    console.log(body.hits.hits)
}

run().catch(console.log)