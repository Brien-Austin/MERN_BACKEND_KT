const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

const blogRoutes = require("./routes/blogRoutes")
const db = require("./config/db");
app.use("/blogs",blogRoutes)

// CRUD
// CREATE 
// READ
// UPDATE

app.listen(process.env.PORT, () =>
    
 {
    db()
    console.log(`Listening on port ${process.env.PORT}`)
 }
  


);
