const express = require('express');
const elastic = require('./elastic.js');
const axios = require('axios');

const PORT = 5000;
const URL = `http://localhost:${PORT}`;

// Set up the express app and routes
const app = express();
require('./routes')(app);

// Turn on server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

const axiosApi = axios.create({
    baseURL: URL,
    timeout: 1000
});

// delete index
// elastic.deleteIndex('messages').catch(console.log);

// create index
// elastic.createMessageIndex().catch(console.log);
// elastic.createUserIndex().catch(console.log);

// function apiCall(route) {
//     return axiosApi.get(route)
//         .then((res) => {
//             return res.data;
//         }).catch((res) => {
//             return res;
//         });
// }

// fill users index
// apiCall('/api/conversation/users').then(res => {
//     if (res.success !== 'true')
//         return;
//
//     res.data.users.map((el) => {
//         elastic.createDocumentsToIndex('users', el).catch(console.log);
//     });
// });

// fill messages index
// apiCall('/api/conversation/random_messages').then(res => {
//     if (res.success !== 'true')
//         return;
//
//     res.data.messages.map((el) => {
//         // console.log(el);
//         elastic.createDocumentsToIndex('messages', el).catch(console.log);
//     });
// });

// search by range
// elastic.elasticRange('users', 'created_at', '2019-03-10 17:18:56', '2019-03-16 17:18:56').catch(console.log);

// search by term
// elastic.elasticSearchByField('users', 'name', 'user100').catch(console.log());

