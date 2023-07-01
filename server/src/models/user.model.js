import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    dob: {
      type: Date,
      required: true,
      select: false
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
