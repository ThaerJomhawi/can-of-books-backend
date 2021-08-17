'use strict'
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  userEmail: String,
  bookTitle: String,
  bookDescription: String,
  bookStatus: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
