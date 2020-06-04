import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: process.env.API,
});

export default client
