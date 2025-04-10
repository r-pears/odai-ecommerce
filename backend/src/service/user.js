import User from '../models/useModel.js';

// Create a new user
export const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

// Find a user by email
export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

// Update a user by ID
export const updateUser = async (userId, updatedFields) => {
    return await User.findByIdAndUpdate(userId, updatedFields, { new: true });
  };