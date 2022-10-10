import { Schema, model } from "mongoose";

interface IAuthor {
  name: string;
}

const authorSchema = new Schema<IAuthor>({
  name: { type: String, required: true },
});

export default model<IAuthor>("Author", authorSchema);
