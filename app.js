import { ApolloServer } from 'apollo-server';
import { application } from './routes/application.js'

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
  schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});