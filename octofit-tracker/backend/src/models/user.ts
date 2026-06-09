import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    age: { type: Number, required: true, min: 13 },
    fitnessLevel: { type: String, required: true, trim: true },
    teamName: { type: String, required: true, trim: true },
    goals: [{ type: String, required: true }],
  },
  {
    timestamps: true,
  },
);

export const UserModel = model('User', userSchema);
