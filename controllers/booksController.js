const Book = require('../models/book');

// ... Initialize MongoDB connection ...
async function getAllBooks(req, res){
  try {
    const books = await Book.find();
    return res.json(books);
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

 async function getBookById(req, res){
  const id = req.params.id;
  try {
    const book = await Book.findById(id);
    if (book) {
      return res.json(book);
    } else {
      return res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
   return res.status(500).json({ message: 'Internal server error' });
  }
};

async function createBook(req, res){
  const body =req.body;
  if(!body || !body.title || !body.author ||!body.summary)
  {
      return res.status(400).json({msg :'all fields are required'})
  }
  const newBook = await Book.create({
    title: body.title,
    author: body.author, 
    summary:body.summary,
  });
    return res.status(201).json({
        msg:"success", id: newBook._id
    });
  
};

async function updateBook(req, res){
  const id = req.params.id;
  const { title, author, summary } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(id, { title, author, summary }, { new: true });
    if (updatedBook) {
      return res.json(updatedBook);
    } else {
     return res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);
    if (deletedBook) {
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getAllBooks, getBookById, createBook, updateBook, deleteBook };
