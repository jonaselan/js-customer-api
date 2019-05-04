const express = require('express');
const elastic = require('./elastic.js');
const axios = require('axios');

const PORT = 5000;
const URL = `http://localhost:${PORT}`;

// Set up the express app and routes
const app = express();
const cors = require('cors');

app.use(cors());
require('./routes')(app);

// Turn on server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

// const axiosApi = axios.create({
//     baseURL: URL,
//     timeout: 1000
// });
// function apiCall(route) {
//     return axiosApi.get(route)
//         .then((res) => {
//             return res.data;
//         }).catch((res) => {
//             return res;
//         });
// }

// DELETE INDEX
// elastic.deleteIndex('messages').catch(console.log);

// CREATE INDEX
// elastic.createIndex('messages', {
//     id: { type: "short" },
//     from: { type: "short" },
//     to: { type: "short" },
//     read: { type: "boolean" },
//     content: { type: "text" },
//     created_at: {
//         type: "date",
//         format: "yyyy-MM-dd HH:mm:ss",
//     },
//     updated_at: {
//         type: "date",
//         format: "yyyy-MM-dd HH:mm:ss",
//     },
// }).catch(console.log);

// elastic.createIndex('users', {
//     properties : {
//         id: { type: "short" },
//         name: { type: "text" },
//         email: { type: "keyword" },
//         created_at: {
//             type: "date",
//             format: "yyyy-MM-dd HH:mm:ss",
//         },
//         updated_at: {
//             type: "date",
//             format: "yyyy-MM-dd HH:mm:ss",
//         },
//     }
// }).catch(console.log);

// elastic.createIndex('customers', {
//     properties : {
//         id: { type: "short" },
//         name: {
//             type: "text",
//             fields: {
//                 completion: {
//                     type: "completion"
//                 }
//             },
//             analyzer: "standard"
//         },
//         email: { type: "keyword" },
//         phone: { type: "text" },
//         website: { type: "text" },
//         created_at: {
//             type: "date",
//             format: "yyyy-MM-dd HH:mm:ss",
//         },
//         updated_at: {
//             type: "date",
//             format: "yyyy-MM-dd HH:mm:ss",
//         }
//     }
// }).catch(console.log);

// FILL USERS INDEX
// apiCall('/api/conversation/users').then(res => {
//     if (res.success === false)
//         return;
//
//     res.data.users.map((el) => {
//         elastic.createDocumentsToIndex('users', el).catch(console.log);
//     });
// });

// FILL MESSAGES INDEX
// apiCall('/api/conversation/random_messages').then(res => {
//     if (res.success === false)
//         return;
//
//     res.data.messages.map((el) => {
//         elastic.createDocumentsToIndex('messages', el).catch(console.log);
//     });
// });

// FILL CUSTOMERS INDEX
// apiCall('/api/customers').then(res => {
//     if (res.success === false)
//         return;
//
//     res.data.customers.map((el) => {
//         elastic.createDocumentsToIndex('customers', el).catch(console.log);
//     });
// });

