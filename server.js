import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import PlaceholderAPI  from './postsApi.js';
import { resolvers } from "./resolvers.js"

const typeDefs = `#graphql
  type Query {
    posts: [Post]
  }
  type Post {
    id: ID!
    userId: ID!
    title: String
    body: String
    comments: [Comments]
  }
  type Comments {
    id: ID!
    postId: ID!
    name: String
    email: String
    body: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers
});


const serverContext = {
  context: async () => {
    const { cache } = server;
   return {
     dataSources: {
       placeholderAPI: new PlaceholderAPI({cache})
     }
   };
 }
}

const { url } = await startStandaloneServer(server, serverContext);
console.log(`Server ready at ${url}`);

export const serverConfig = {
  server,
  serverContext
}



