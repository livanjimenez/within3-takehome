import {
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
  InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://api.spacex.land/graphql",
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
