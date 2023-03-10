<<<<<<< HEAD
const mongoose=require("mongoose")

mongoose.set('strictQuery', true);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: true
        });
        console.log(`MongoDb connected :${conn.connection.host}`);
    }
    catch (error) {
        console.error(`Error:${error.message}`);
        process.exit();
    }
};

=======
const mongoose=require("mongoose")

mongoose.set('strictQuery', true);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: true
        });
        console.log(`MongoDb connected :${conn.connection.host}`);
    }
    catch (error) {
        console.error(`Error:${error.message}`);
        process.exit();
    }
};

>>>>>>> 0cc7da956c59dbb6ce1073bc9d8f86fd3c4dd9dc
module.exports = connectDB;