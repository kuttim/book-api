import { authorQueries } from "./author/queries";
import { authorMutations } from "./author/mutations";
import { bookMutations } from "./books/mutation";
import { bookQueries } from "./books/queries";

export const resolvers = {
  Query: {
    ...authorQueries,
    ...bookQueries,
  },
  Mutation: {
    ...authorMutations,
    ...bookMutations,
  },
};
