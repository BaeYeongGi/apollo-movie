import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {     
        console.log(id)   
            cache.modify({
            id: `Movie:${id}`,
            fields: {
              isLiked: () => true,
            },
        });
      },
    },
  }
});

export default client;