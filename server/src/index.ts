import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './resolvers/index.js';
import typeDefs from './typeDefs/index.js';
import authScope from './utils/authScope.js';

const main = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    // Middleware for CHECKING TOKEN
    context: async ({ req, res }) => {
      const { authorization } = req.headers;
      if (!authorization) return null;
      const token = await authScope(authorization);
      return {
        token: token,
      };
    },
  });

  console.log(`🚀  Server ready at: ${url}`);
};

main().catch((err) => console.log(err));
