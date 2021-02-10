const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes');
//middlewares
app.use(express.static(`public`)); //This middleware allows node to access the public folder
app.use(express.json()); //This middleware is used to access the data sent via the request body

app.use('/api/users', userRouter);

module.exports = app;
