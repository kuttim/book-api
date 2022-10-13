import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const bookQueries = {
  books: async () => {
    return prisma.book.findMany();
  },
  book: async (_, { book }) => {
    return prisma.book.findUnique({
      where: {
        id: book.id,
      },
    });
  },
};
