import * as React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import CharacterList from './components/CharacterList';
import Character from './components/Character';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <CharacterList />,
  },
  {
    path: '/character/:id',
    element: <Character/>,
  },
]);

ReactDOM.render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>,
  document.getElementById('root')
);