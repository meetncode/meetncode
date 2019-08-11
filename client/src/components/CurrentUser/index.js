import React from 'react';
import { Query } from 'react-apollo';

import QUERY_CURRENT_USER from './queryCurrentUser.graphql';

const CurrentCurrent = ({ children }) => {
  return (
    <Query query={QUERY_CURRENT_USER}>
      {({loading, data}) => {
        if(loading || !data) {
          return null;
        }

        return children({ user: data.currentUser})
      }}
    </Query>
  )
}

export default CurrentCurrent;