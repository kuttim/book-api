import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const bookQueries = {
  books: async (_, { book }) => {
    return prisma.book.findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });
  },
  book: async (_, { id }) => {
    const book = await prisma.book.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    console.log(book);

    return book;
  },
};
