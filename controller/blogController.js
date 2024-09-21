const blogModel = require("../model/blog.model");

const createBlog = async(req,res)=>{
    try {
        const { title , description } = req.body;
        const blog = await blogModel.create({
            title,
            description
        })
        await blog.save()
        return res.status(201).json({
            blog
        })

        
    } catch (error) {
      
        return res.status(500).json({
            message : "Internal Server Error",
        })
        
    }
}

const getBlogs = async(req,res)=>{
    try {
      
        const blogs = await blogModel.find()
        
        return res.status(201).json({
            message : "Blogs fetched successfully",
            blogs
        })

        
    } catch (error) {
      
        return res.status(500).json({
            message : "Internal Server Error",
        })
        
    }
}

const updateBlog =async(req,res) => {
    try {
        const {id} = req.params;
        const {title , description} = req.body
        const updatedBlog = await blogModel.findByIdAndUpdate(id,{
            title,description
        })
        
        return res.status(200).json({
            message : "Blog updated successfully",
            updatedBlog
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : "Internal Server Error",
        })
    }
}

const deleteBlog =async(req,res) => {
    try {
        const {id} = req.params;
       
        const updatedBlog = await blogModel.findByIdAndDelete(id)
        
        return res.status(200).json({
            message : "Blog deleted successfully",
        
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message : "Internal Server Error",
        })
    }
}

module.exports = {createBlog,getBlogs,updateBlog,deleteBlog}