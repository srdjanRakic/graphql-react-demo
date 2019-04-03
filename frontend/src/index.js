import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { setContext } from 'apollo-link-context';

import App from './App';

localStorage.removeItem('token');

const authorizationMiddleware = setContext((operation, previousContext) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return previousContext;
  }

  return {
    ...previousContext,
    headers: {
      ...previousContext.headers,
      Authorization: `Bearer ${token}`
    }
  }
})

const client = new ApolloClient({
  link: authorizationMiddleware.concat(new HttpLink({ uri: 'http://localhost:8000/graphql' })),
  cache: new InMemoryCache()
});

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);


ReactDOM.render(<AppWithProvider />, document.getElementById("root"));