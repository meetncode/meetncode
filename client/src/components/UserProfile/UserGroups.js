import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import GET_USER_GROUPS from './queryGetUserGroups.graphql';

const UserGroups = props => {
  const { groups } = props;
  return (
    <div>
      <h3>Your Groups</h3>
      <ul className='groups'>
        {groups.map(group => {
          const { id } = group;
          const url = `/group/${id}`;
          return (
            <Query query={GET_USER_GROUPS} variables={{ id }} key={group.id}>
              {({ data, loading, error }) => {
                if (loading) return <p>Loading</p>;
                if (error) return <p>ERROR</p>;
                const userGroups = data.getGroup;
                return (
                  <React.Fragment>
                    <li>
                      <Link to={url} className='group-link'>
                        <img src='https://via.placeholder.com/50' alt='' />
                        <h5>{userGroups.name}</h5>
                      </Link>
                    </li>
                  </React.Fragment>
                );
              }}
            </Query>
          );
        })}
      </ul>
    </div>
  );
};

UserGroups.propTypes = {
  groups: PropTypes.object
};

export default UserGroups;
