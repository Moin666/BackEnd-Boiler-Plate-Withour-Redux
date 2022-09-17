const mongoose = require('mongoose');


const databaseconnection = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://moinkhan:11223344@cluster0.diuuqau.mongodb.net/?retryWrites=true&w=majority');
        console.log("connected")
    }catch(e){
            console.log(e)
    }
 
}


module.exports = databaseconnection

