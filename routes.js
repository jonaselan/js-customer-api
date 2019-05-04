let db = require('./db.js');
const elastic = require('./elastic.js');

module.exports = function(app){
    app.get('/', function(req, res) {
        res.status(200).send({
            data: 'All ready to go!'
        });
    });

    // get all messages
    app.get('/api/conversation/random_messages', (req, res) => {
        res.status(200).send({
            success: true,
            data: db.getAllMessages()
        });
    });

    // get messages from conversation
    app.get('/api/conversation/messages/:count', (req, res) => {
        res.status(200).send({
            success: true,
            data: db.getConversationMessages(req.params.count)
        });
    });

    // get all users
    app.get('/api/conversation/users', async (req, res) => {
        let options = {
            success: true,
            elasticResult: [],
            params: req.query,
            index: 'users'
        };
        await filterRequest(options);

        res.status(200).send({
            success: options.success,
            data: options.elasticResult.length
                ? options.elasticResult
                : db.getUsersStatic()
        });
    });

    // get all customers
    app.get('/api/customers', async (req, res) => {
        let options = {
            success: true,
            elasticResult: [],
            params: req.query,
            index: 'customers'
        };
        await filterRequest(options);

        res.status(200).send({
            success: options.success,
            data: options.elasticResult.length
                ? options.elasticResult
                : db.getCustomersStatic()
        });
    });
};

function isEmptyObject(obj){
    return (Object.getOwnPropertyNames(obj).length === 0);
}

async function filterRequest(options) {
    if (!isEmptyObject(options.params)) {
        if (options.params.search_type === 'term') {
            options.elasticResult = await elastic
                .elasticSearchByField(options.index, options.params.field, options.params.q)
                .then(result => {
                    return result;
                })
                .catch((err) => {
                    options.success = false;
                    return `Internal error: ${err}`;
                });
        }

        if (options.params.search_type === 'range') {
            options.elasticResult = await elastic
                .elasticRange(options.index, options.params.field, options.params.gte, options.params.lte)
                .then(result => {
                    return result;
                })
                .catch((err) => {
                    options.success = false;
                    return `Internal error: ${err}`;
                });
        }

        if (options.params.search_type === 'suggestion') {
            options.elasticResult = await elastic
                .elasticSearchByFieldAutocomplete(options.index, options.params.field, options.params.q)
                .then(result => {
                    return result;
                })
                .catch((err) => {
                    options.success = false;
                    return `Internal error: ${err}`;
                });
        }
    }
}