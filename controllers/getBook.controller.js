"use strict";
const mongoose=require('mongoose')
const BookModel = require("../modals/Book.model");

const getBookController = (req, res) => {

BookModel.find({}),(error,result)=>{
    if (error){
        res.send(error)
    }
    else{
        res.send(result)
    }
}
  
  
};
module.exports = getBookController;
