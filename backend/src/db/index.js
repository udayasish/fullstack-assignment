import mongoose from "mongoose"

const url = process.env.MONGODB_URI

const dbConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${url}/help-center`)
        console.log(`MongoDB connected succesfully!! Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection FAILED !! : ", error);
        process.exit(1);
        
    }
}


export default dbConnect