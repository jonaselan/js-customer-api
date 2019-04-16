let express = require('express');
let db = require('./db.js');

// Set up the express app
const app = express();

app.get('/', function(req, res) {
    res.status(200).send({
       data: 'All ready to go!'
    });
});

// get all messages
app.get('/api/conversation/messages', (req, res) => {
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