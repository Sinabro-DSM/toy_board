const express = require('express');
const app =express();
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
const autoIncrement = require('mongoose-auto-increment');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URL);

const PORT = 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers','content-type,x-accesee-token');
    next();
});

app.use('/auth',require('./routes/auth'));
app.use('/hello',require('./util/isLoggedIn'), (req,res)=>{
    res.send("hello world");
});

app.listen(PORT,()=>console.log('server start at'+PORT));