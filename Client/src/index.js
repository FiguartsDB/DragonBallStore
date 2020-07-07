import React from 'react'
import ReactDom from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import apolloClient from './Services/Graphql/'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styled/globalStyles'

// App entry point
import App from '@components/App'
import theme from './styled/theme'

ReactDom.render(
	<ApolloProvider client={apolloClient}>
	  <ThemeProvider theme={theme} >
		<GlobalStyles/>
		<App/>
	  </ThemeProvider>
	</ApolloProvider>,
  document.getElementById('app')
)
