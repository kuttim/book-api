import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authorQueries = {
  authors: async () => {
    return prisma.author.findMany();
  },
  author: async (_, { author }) => {
    return prisma.author.findUnique({
      where: {
        id: author.id,
      },
    });
  },
};
