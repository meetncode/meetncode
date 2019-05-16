import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store';

const client =  new ApolloClient({
  uri: 'http://localhost:4000/'
});

const AppWrapper = () => (
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
);

ReactDOM.render(<Provider store={store}>
<AppWrapper /></Provider>, document.getElementById('root'));