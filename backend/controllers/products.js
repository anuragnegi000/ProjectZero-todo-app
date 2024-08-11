const getAllProducts=async(req,res)=>{
    res.status(200).json({
        message:"I am working fine",
    })
}

const getAllProductsTesting=async(req,res)=>{
    res.status(200).json({
        message:"I am working fine",
    })
}

module.exports={
    getAllProducts,
    getAllProductsTesting,
}