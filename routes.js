let db = require('./db.js');

module.exports = function(app){
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
};