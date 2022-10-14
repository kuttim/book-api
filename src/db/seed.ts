import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

async function main() {
  const author = await prisma.author.create({
    data: {
      name: faker.name.fullName(),
      books: {
        createMany: {
          data: [
            {
              title: faker.lorem.words(2),
              published: true,
            },
          ],
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
