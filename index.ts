import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import schema from "././src/graphql/schema";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

async function startServer() {
  const server = new ApolloServer({
    //schema,
    typeDefs: `
    type Query {
      hello: String
      }
      `,
    resolvers: {
      Query: {
        hello: () => "Hello world!",
      },
    },
    introspection: true,
    formatError: (error) => {
      console.log(error);
      return error;
    },
    context: ({ req, res }) => {
      return {
        req,
        res,
      };
    },
  });
  await server.start();
  server.applyMiddleware({ app: app, path: "/graphql" });
}

startServer();
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
