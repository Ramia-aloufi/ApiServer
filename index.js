import express from 'express';
import bodyParser from 'body-parser';
import bukitRouter from './routes/bukit.js';

//const express = require('express');


const app = express();
const PORT = 7070;
// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use('/bukit',bukitRouter);

app.get('/',(req,res)=>res.send("hi"));



app.listen(PORT,()=>console.log(`Server is running on Port http://localhost:${PORT}`));
