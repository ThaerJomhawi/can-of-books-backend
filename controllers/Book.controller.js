"use strict";
const getBookController = require("./getBook.controller");
const BookModel = require("../modals/Book.model");

const bookController = (req, res) => {
  const newBook = new BookModel(
         {
        userEmail: "Thaer.chemical@ABU.jo",
        bookTitle: "Thaer for Chemical Engineering",
        bookDescription:
          "thaer thaer thaer .",
        bookStatus: "Available",
      }
  )

  newBook.save();
  BookModel.find({},(error,result)=>{
    if (error){
        res.send(error)
    }
    else{
        res.send(result)
    }
}
  )};
module.exports = bookController;
