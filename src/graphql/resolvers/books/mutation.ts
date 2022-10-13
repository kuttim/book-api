import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const bookMutations = {
  createBook: async (_, { book }: any) => {
    return prisma.book.create({
      data: {
        author: {
          connect: {
            id: book.authorId,
          },
        },
        title: book.title,
        published: book.published,
      },
    });
  },
  updateBook: async (_, { book }: any) => {
    return prisma.book.update({
      where: {
        id: book.id,
      },
      data: {
        title: book.title,
        published: book.published,
      },
    });
  },
};
