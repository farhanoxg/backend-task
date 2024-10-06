const mongoose = require('mongoose')

const mongourl = `mongodb+srv://DB_NAME:DB_pass@cluster0.hr93yw2.mongodb.net/job?retryWrites=true&w=majority&appName=Cluster0`
const mongoDB = async ()=>{
    try {
        await mongoose.connect(mongourl)
         console.log("database connected");
    } catch (error) {
        console.log("some errors",error);
    }
}

module.exports = mongoDB;