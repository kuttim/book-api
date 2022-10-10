import mongoose, { ConnectOptions } from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
