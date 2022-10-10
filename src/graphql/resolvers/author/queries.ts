import Author from "../../../db/models/author";

const authorQueries = {
  authors: async () => {
    const authors = await Author.find();

    return authors;
  },
  author: async (parent: any, { id }: { id: number }) => {
    const author = await Author.findById(id);

    return author;
  },
};

export default authorQueries;
