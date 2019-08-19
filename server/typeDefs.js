const UserSchema = require('./User/UserTypes');
const EventSchema = require('./Event/EventTypes');
const CategorySchema = require('./Category/CategoryTypes');
const OtherSchema = require('./Other/OtherTypes');
const GroupSchema =  require('./Group/GroupTypes');

const typeDefs = [UserSchema, EventSchema, CategorySchema, OtherSchema, GroupSchema];

module.exports = typeDefs;