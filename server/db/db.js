const express = require('express');

const mongoose = require('mongoose');

const connectDb= async() =>{
    await mongoose.connect(process.env.MONGO_URL)
    .then(() =>{
        console.log('Mongodb connected');
    })
    .catch((error) =>{  
        console.log(error)
    })
}

module.exports = connectDb;