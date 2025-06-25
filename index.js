const express = require('express');
const app = express();
//const fs = require('fs');
//const users= require('./MOCK_DATA.json');
const port = 8000;
const userRouter = require('./routes/user');
const { connectMongoDB } = require('./connection');
const {logReqRes} = require('./middlewares');

//connect to mongodb
connectMongoDB('mongodb://localhost:27017/expressjs_firstapp');

//middleswares
app.use( express.urlencoded({ extended: false }) );
app.use(logReqRes('logs.txt'));

//routes
app.use("/user", userRouter);


app.listen(port, () => console.log(`server is running on port: ${port}`));
