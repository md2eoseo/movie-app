import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://movieql2.now.sh/",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.writeData({ id: `Movie:${id}`, data: { isLiked: true } });
      },
      unlikeMovie: (_, { id }, { cache }) => {
        cache.writeData({ id: `Movie:${id}`, data: { isLiked: false } });
      },
    },
  },
});

export default client;
