const express = require('express')
const router = express.Router()
const blogController = require('../controller/blogController')


router.post("/create",blogController.createBlog)
router.get("/getAll",blogController.getBlogs)
router.put("/update/:id",blogController.updateBlog)
router.delete("/delete/:id",blogController.deleteBlog)

module.exports = router