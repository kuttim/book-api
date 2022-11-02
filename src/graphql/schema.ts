import { readdirSync, readFileSync } from "fs";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { join } from "path";
import { resolvers } from "../graphql/resolvers";
import { gql } from "apollo-server-express";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typeDefPaths = readdirSync(join(__dirname, "./typedefs"));

let typeDefs = [];
typeDefPaths.forEach((typeDefPath) => {
  typeDefs.push(
    gql(readFileSync(join(__dirname, "./typedefs", typeDefPath), "utf-8"))
  );
});

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(typeDefs),
  resolvers,
});

export default schema;
