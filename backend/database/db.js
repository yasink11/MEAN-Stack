const mongoose = require("mongoose");

const uri = "mongodb+srv://MongoDb:Password@eticaretdb.oy0f6ad.mongodb.net/?retryWrites=true&w=majority"

const connection = ()=>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true

    }).then(()=>console.log("Mongo Db bağlantısı gerçekleştirildi!"))
    .catch((err)=> console.log("Bağlantı Hatası! Hata:"+ err.message));
}


module.exports = connection;