import ApolloClient from 'apollo-boost';
import { getLocalStorage } from '../../Utils/Auth'

const client = new ApolloClient({
    uri: process.env.API,
    request: async operation => { 
        const userInfo = getLocalStorage('sub')
        let token = false
        if (userInfo)
            token = userInfo.token

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        });
    }
});

export default client
