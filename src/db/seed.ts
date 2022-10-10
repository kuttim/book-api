import mongoose, { connection } from "mongoose";
import connect from "./connect";
import Author from "./models/author";
import Book from "./models/book";
import { faker } from "@faker-js/faker";

const seed = async () => {
  /**
   * Clean the database.
   */
  await mongoose.connect;
  await connection.dropDatabase();
  /**
   * Create seed data.
   */
  const author = [
    new Author({
      name: faker.name.findName(),
    }),
    new Author({
      name: faker.name.findName(),
    }),
    new Author({
      name: faker.name.findName(),
    }),
  ];
  const books = [
    new Book({
      name: faker.lorem.sentence(),
      author: author[0]._id,
    }),
    new Book({
      name: faker.lorem.sentence(),
      author: author[1]._id,
    }),
    new Book({
      name: faker.lorem.sentence(),
      author: author[2]._id,
    }),
    new Book({
      name: faker.lorem.sentence(),
      author: author[3]._id,
    }),
  ];
};

seed();
