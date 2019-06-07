const { merge } =  require('lodash');

const { UserResolvers } = require('./User/UserResolvers');
const { EventResolvers } = require('./Event/EventResolver');
const { GroupResolvers } = require('./Group/GroupResolvers');
const { CategoryResolvers } = require('./Category/CategoryResolvers');
const { LocationResolvers } = require('./Location/LocationResolver');

const resolvers = merge(
  UserResolvers,
  EventResolvers,
  GroupResolvers,
  CategoryResolvers,
  LocationResolvers
);

module.exports = resolvers;