const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook_development"

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Failed to connect to Mongo:", error);
    }
};


module.exports = connectToMongo;