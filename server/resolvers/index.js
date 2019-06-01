const { merge } =  require('lodash');

const { UserResolvers } = require('./UserResolvers');
const { EventResolvers } = require('./EventResolver');
const { GroupResolvers } = require('./GroupResolvers');
const { CategoryResolvers } = require('./CategoryResolvers');

const resolvers = merge(
  UserResolvers,
  EventResolvers,
  GroupResolvers,
  CategoryResolvers

);

module.exports = resolvers;