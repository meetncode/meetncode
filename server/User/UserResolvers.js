const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { User } = require('./UserModel');

const UserResolvers = {
  Query: {
    getUser: async(_, { id }, { isAuth }) => {
      // if(!isAuth) throw Error('You are not authorized to do this');
      return await User.findById(id)
        .populate('events')
        .populate('categories')
        .populate('groups');
    },
    getUsersByGroup: async(_, { groupId }, { isAuth }) => {
      // if(!isAuth) throw Error('You are not authorized to do this');
      return await User.find({ groups: { $in: groupId } })
        .populate('events')
        .populate('categories')
        .populate('groups');
    },
    currentUser: async(_, __, { isAuth, userId }) => {
      // if(!isAuth) throw Error('You are not authorized to do this');
      return await User.findById(userId)
        .populate('events')
        .populate('categories')
        .populate('groups');
    }
  },
  Mutation: {
    signupUser: async (_, { input }) => {
      const { email } = input;
      const user = await User.findOne({ email});

      if(user) throw Error('Email already registered');

      const hashedPassword = await bcrypt.hashSync(input.password, 10);
      input.password = hashedPassword;

      const newUser = await User.create(input);

      const token  = jwt.sign({
        userId: newUser.id,
        email: newUser.email
      },
        'secretkey',
        {
          expiresIn: '3h'
      });

      return {
        userId: newUser.id,
        token,
        tokenExpiration: 3
      }

    },
    loginUser: async(_, { email, password }, { isAuth }) => {
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
    },
    updateUser: async (_, { id, input }, { isAuth, userId }) => {
      // if(!isAuth || userId != id) throw Error('You are not authorized to do this');
      return await User.findByIdAndUpdate(id, input, {
          new: true
      });
    }
  }
}

module.exports = { UserResolvers };