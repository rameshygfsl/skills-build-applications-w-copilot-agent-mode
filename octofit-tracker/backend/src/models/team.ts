import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    motto: { type: String, required: true, trim: true },
    memberCount: { type: Number, required: true, min: 1 },
    totalPoints: { type: Number, required: true, min: 0 },
    focus: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

export const TeamModel = model('Team', teamSchema);
