const mongoose = require("mongoose");

async function main(){
    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            "mongodb+srv://gabriel0917py:qyFs6qQ19OTibKNm@cluster0.wgot1pn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
            );
            console.log("Conectado ao Banco");
    
        } catch (error){
        console.log(error)
    }
}



module.exports = main;