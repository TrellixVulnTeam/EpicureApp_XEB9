  //mongodb+srv://yardentsaraf:yarden9082@cluster0.auaij.mongodb.net/EPICURE?retryWrites=true&w=majority
/*
const mongoose = require('mongoose');

// Using ES6 imports
import mongoose from 'mongoose';



// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })
  */

const express = require('express');
const { port } = require('./config.json');
const data = require("./dummyData");

const app = express();

app.get('/data', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ data: data })
});

app.listen(port, () => console.log(`server is listening on: ${port}`));


  