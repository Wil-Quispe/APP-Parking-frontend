import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import ModalProvider from '../context/modal/modalContext'
import './../style/index.css'

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_URI}`,
})

const wsLink: any = process.browser
  ? new WebSocketLink({
      uri: `${process.env.NEXT_PUBLIC_WS_URI}`,
      options: { reconnect: true },
    })
  : null

const link = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        )
      },
      wsLink,
      httpLink,
    )
  : httpLink

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ApolloProvider client={client}>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
