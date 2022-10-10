import { Schema, model } from "mongoose";

interface IBook {
  name: string;
  author: string;
}

const bookSchema = new Schema<IBook>({
  name: { type: String, required: true },
  author: { type: String, required: true },
});

export default model<IBook>("Book", bookSchema);
