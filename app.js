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

// const axiosApi = axios.create({
//     baseURL: URL,
//     timeout: 1000
// });

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
//     if (res.success === false)
//         return;
//
//     res.data.users.map((el) => {
//         elastic.createDocumentsToIndex('users', el).catch(console.log);
//     });
// });

// fill messages index
// apiCall('/api/conversation/random_messages').then(res => {
//     if (res.success === false)
//         return;
//
//     res.data.messages.map((el) => {
//         elastic.createDocumentsToIndex('messages', el).catch(console.log);
//     });
// });


