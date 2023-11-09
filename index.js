const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const booksRoute = require('./routes/books');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ishitagupta2003:12345@cluster0.eny0ba8.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Mongodb connected!"));

app.use(express.urlencoded({extended: false}));

app.use('/books', booksRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
