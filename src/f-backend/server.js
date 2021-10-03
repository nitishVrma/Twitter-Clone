const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const connect = require('./configs/db');
app.use(cors());
app.use(express.json());



const userController = require('./controllers/user.controller');
const postController = require('./controllers/post.controller');


app.use('/user', userController);
app.use('/post', postController);
     
app.listen(8000, async () => {
    await connect();
    console.log("listening to port 8000")
});

