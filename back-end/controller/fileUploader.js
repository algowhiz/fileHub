const fileSchema = require('../models/file')
const uploadData = async (req,res) =>{
    const fileObj = {
        path:req.file.path,
        name:req.file.originalname
    }
    try {
        // console.log(req);
        const file = await fileSchema.create(fileObj);
        return res.status(200).json({path:`http://localhost:4000/file/${file._id}`})
    } catch (error) {
        console.log("err",error.message);
    }
}

const downloadImg = async (req,res) =>{
    try {
        const result = await fileSchema.findById(req.params.id)

        res.download(result.path,result.name);
    } catch (error) {
        console.log("err",error.message);
    }
}


module.exports = {uploadData,downloadImg};