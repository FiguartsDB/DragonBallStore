import React from 'react'
import ReactDom from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import apolloClient from './api'

// App entry point
import App from '@components/App'

ReactDom.render(
	<ApolloProvider client={apolloClient}>
	  <App />
	</ApolloProvider>,
    document.getElementById('app')
)
