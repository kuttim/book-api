import authorQueries from "./author/queries";

const resolvers = {
  Query: {
    ...authorQueries,
  },
};

export default resolvers;
