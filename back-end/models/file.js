const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    path:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
});


const fileModule = mongoose.model("fileSchema",fileSchema);

module.exports=fileModule;