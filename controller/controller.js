const getData = async(req,res) =>{
    const data = [
        {
            name : "John Doe"
        },
        {
            name : "John "
        },
        {
            name : "John Smith"
        }
    ]

    return res.status(200).json(data)

}

module.exports = getData;