import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4w81yts21uw01ta7n1w3wvn/master",
  cache: new InMemoryCache(),
});
