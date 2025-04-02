const express = require('express');

//app
const app = express();

//port
const port = 3000;

//body parser
app.use(express.json());

//routers
const routers = require('./routers/bookRoouter.js');

//middleware
const logger = require('./middlewares/logger.js');

app.get('/', () => {

    console.log('base test');
});

app.use('/books', logger, routers);

app.listen(port, () => {

    console.log(`Listen on port ${port}`);
});