const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('./UserModel');

const UserResolvers = {
  Query: {
    getUser: async(_, { id }, { isAuth }) => {
      if(!isAuth) throw Error('You are not authorized to do this');
      return await User.findById(id)
        .populate('events')
        .populate('categories')
        .populate('groups')
        .populate('location');
    },
    getUsersByGroup: async(_, { groupId }, { isAuth }) => {
      if(!isAuth) throw Error('You are not authorized to do this');
      return await User.find({ groups: { $in: groupId } })
        .populate('events')
        .populate('categories')
        .populate('groups')
        .populate('location');
    },
    loginUser: async(_, { email, password }) => {
      const user = await User.findOne({ email });
      if(!user) {
        throw new Error('User does not exists');
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if(!isMatch) {
        throw new Error('Invalid credentials')
      }

      const token  = jwt.sign({
        userId: user.id,
        email: user.email
      },
        'secretkey',
        {
          expiresIn: '3h'
      });

      return {
        userId: user.id,
        token,
        tokenExpiration: 3
      }
    }
  },
  Mutation: {
    signupUser: async (_, { input }) => {
      const { email } = input;
      const user = await User.findOne({ email});

      if(user) throw Error('Email already registered');

      const hashedPassword = await bcrypt.hashSync(input.password, 10);
      input.password = hashedPassword;
      return User.create(input);
    },
    updateUser: async (_, { id, input }, { isAuth, userId }) => {
      if(!isAuth || userId != id) throw Error('You are not authorized to do this');
      return await User.findByIdAndUpdate(id, input, {
          new: true
      });
    }
  }
}

module.exports = { UserResolvers };