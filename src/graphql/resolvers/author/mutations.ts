import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authorMutations = {
  createAuthor: async (_, { author }: any) => {
    return prisma.author.create({
      data: {
        name: author.name,
      },
    });
  },
  updateAuthor: async (_, { author }: any) => {
    return prisma.author.findUnique({
      where: {
        id: author.id,
      },
    });
  },
};
