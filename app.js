let express = require('express');
let elastic = require('./elastic.js');

// Set up the express app and routes
const app = express();
require('./routes')(app);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});

elastic.createDocumentsToIndex()
// run().catch(console.log);