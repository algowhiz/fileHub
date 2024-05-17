const mongoose = require('mongoose');

const connectingDB = async () =>{
    try {
        const MONGO_URL=`mongodb+srv://algowhiz:Algowhiz4599@cluster0.vpks8h8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        await mongoose.connect(MONGO_URL,{useNewUrlParser:true});
        console.log("db connected");
    } catch (error) {
        console.log("err",error.message);
    }
}

module.exports={connectingDB};