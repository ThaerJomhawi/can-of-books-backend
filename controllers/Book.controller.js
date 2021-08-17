"use strict";
const BookModel = require("../modals/Book.model");

const bookController = (req, res) => {
  const newBook = new BookModel(
         {
        userEmail: "Math@ABU.jo",
        bookTitle: "Linear Mathematical Models In Chemical Engineering",
        bookDescription:
          "Mathematics remains a core area of engineering. Formulating and analyzing mathematical models of basic engineering systems is an essential skill that all engineering students should endeavor to acquire.",
        bookStatus: "Available",
      }
  )

  newBook.save();
  res.send(newBook);
};
module.exports = bookController;
