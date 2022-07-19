const { ApolloServer, gql} = require('apollo-server');
const { products } = require('./products');


const typeDefs = gql`
  type Query {
    hello: String,
    products: [Product!]!
  }

  type Product {
    name: String!,
    description: String!,
    quantity: Int!,
    price: Float!,
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
        return "World!"
    },
    products: () => {
      return products
    },
  }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({ url }) => {
    console.log("Server is listening at" + url);
})