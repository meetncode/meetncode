const { merge } =  require('lodash')

const { UserResolvers } = require('./User/UserResolvers')
const { EventResolvers } = require('./Event/EventResolver')
const { GroupResolvers } = require('./Group/GroupResolvers')
const { CategoryResolvers } = require('./Category/CategoryResolvers')
const { OtherResolvers } = require('./Other/OtherResolvers')

const resolvers = merge(
  UserResolvers,
  EventResolvers,
  GroupResolvers,
  CategoryResolvers,
  OtherResolvers
)

module.exports = resolvers