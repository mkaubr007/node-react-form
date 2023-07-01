import User from '../models/user.model';
import sendEmail from '../utils/nodemailer.util';
//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};

//create new user
export const newUser = async (body) => {
  const data = await User.create(body);
  const emailText = `Hello ${body.name},\n\nWelcome to our platform! 
  Your account has been created successfully.`;
  await sendEmail(body.email, 'Welcome to Our Platform', emailText);
  return data;
};
