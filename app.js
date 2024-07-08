const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const database = 'mongodb://127.0.0.1:27017/flashcards'


const app = express();
const {PORT = 2020} = process.env;

const mainRouter = require('./routes/index')

mongoose.connect(database).then(()=>{
  console.log('connected to database')
});


app.use(cors());
app.use(express.json());
app.use('/', mainRouter)

app.listen(PORT, ()=>{
  console.log('app running on port ' + PORT)
})