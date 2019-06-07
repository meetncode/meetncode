const UserSchema = require('./User/UserTypes');
const EventSchema = require('./Event/EventTypes');
const CategorySchema = require('./Category/CategoryTypes');
const LocationSchema = require('./Location/LocationTypes');
const GroupSchema =  require('./Group/GroupTypes');

const typeDefs = [UserSchema, EventSchema, CategorySchema, LocationSchema, GroupSchema];

module.exports = typeDefs;