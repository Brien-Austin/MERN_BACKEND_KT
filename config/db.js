const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const db = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("DATABASE CONNECTED")
        
    } catch (error) {
        console.error('Error connecting to database',error)
        
    }
}

module.exports = db;