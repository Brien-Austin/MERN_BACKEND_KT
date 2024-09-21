const createUser = async(req,res) =>{
    try {
        const {name, password} = req.body;
        if(!name  || !password) {
            return res.status(404).json({
                message : "User name or Password are required"
            })

        }


    return res.status(201).json({
        message : "User created successfully",
        name,password
    })
        
    } catch (error) {
        return res.status(500).json({
            message : "Internal Server Error",
        })
        
    }

}




const deletePost = async(req,res) =>{

    return res.status(201).json("Post deleted Successfully")

}


module.exports = {createUser,deletePost}