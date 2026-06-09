import mongoose from 'mongoose';

import { ActivityModel } from '../models/activity';
import { LeaderboardModel } from '../models/leaderboard';
import { TeamModel } from '../models/team';
import { UserModel } from '../models/user';
import { WorkoutModel } from '../models/workout';

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

async function seedDatabase() {
  console.log('Seed the octofit_db database with test data');

  await mongoose.connect(mongoUri);

  const teams = [
    {
      name: 'Summit Sprinters',
      motto: 'Climb stronger every day',
      memberCount: 3,
      totalPoints: 2840,
      focus: 'Endurance',
    },
    {
      name: 'Pulse Crew',
      motto: 'Train with rhythm and intent',
      memberCount: 2,
      totalPoints: 2310,
      focus: 'Cardio',
    },
  ];

  const users = [
    {
      name: 'Maya Chen',
      email: 'maya.chen@example.com',
      age: 29,
      fitnessLevel: 'Advanced',
      teamName: 'Summit Sprinters',
      goals: ['Half marathon PR', 'Improve VO2 max'],
    },
    {
      name: 'Jordan Alvarez',
      email: 'jordan.alvarez@example.com',
      age: 34,
      fitnessLevel: 'Intermediate',
      teamName: 'Summit Sprinters',
      goals: ['Consistency', 'Lower resting heart rate'],
    },
    {
      name: 'Priya Raman',
      email: 'priya.raman@example.com',
      age: 31,
      fitnessLevel: 'Intermediate',
      teamName: 'Summit Sprinters',
      goals: ['Build stamina', 'Weekly 10k runs'],
    },
    {
      name: 'Ethan Brooks',
      email: 'ethan.brooks@example.com',
      age: 27,
      fitnessLevel: 'Beginner',
      teamName: 'Pulse Crew',
      goals: ['Lose 5kg', 'Complete 5 workouts weekly'],
    },
    {
      name: 'Sofia Patel',
      email: 'sofia.patel@example.com',
      age: 30,
      fitnessLevel: 'Advanced',
      teamName: 'Pulse Crew',
      goals: ['Strength balance', 'Improve recovery'],
    },
  ];

  const activities = [
    {
      userName: 'Maya Chen',
      teamName: 'Summit Sprinters',
      type: 'Tempo Run',
      durationMinutes: 48,
      caloriesBurned: 540,
      completedAt: new Date('2026-06-07T06:30:00Z'),
    },
    {
      userName: 'Jordan Alvarez',
      teamName: 'Summit Sprinters',
      type: 'Indoor Cycling',
      durationMinutes: 35,
      caloriesBurned: 410,
      completedAt: new Date('2026-06-08T18:15:00Z'),
    },
    {
      userName: 'Priya Raman',
      teamName: 'Summit Sprinters',
      type: 'Recovery Jog',
      durationMinutes: 30,
      caloriesBurned: 280,
      completedAt: new Date('2026-06-08T07:00:00Z'),
    },
    {
      userName: 'Ethan Brooks',
      teamName: 'Pulse Crew',
      type: 'HIIT Circuit',
      durationMinutes: 25,
      caloriesBurned: 320,
      completedAt: new Date('2026-06-08T17:45:00Z'),
    },
    {
      userName: 'Sofia Patel',
      teamName: 'Pulse Crew',
      type: 'Strength Session',
      durationMinutes: 42,
      caloriesBurned: 360,
      completedAt: new Date('2026-06-09T05:50:00Z'),
    },
  ];

  const leaderboard = [
    {
      rank: 1,
      userName: 'Maya Chen',
      teamName: 'Summit Sprinters',
      totalPoints: 980,
      streakDays: 14,
    },
    {
      rank: 2,
      userName: 'Sofia Patel',
      teamName: 'Pulse Crew',
      totalPoints: 910,
      streakDays: 11,
    },
    {
      rank: 3,
      userName: 'Jordan Alvarez',
      teamName: 'Summit Sprinters',
      totalPoints: 870,
      streakDays: 9,
    },
    {
      rank: 4,
      userName: 'Priya Raman',
      teamName: 'Summit Sprinters',
      totalPoints: 760,
      streakDays: 8,
    },
    {
      rank: 5,
      userName: 'Ethan Brooks',
      teamName: 'Pulse Crew',
      totalPoints: 690,
      streakDays: 6,
    },
  ];

  const workouts = [
    {
      title: 'Lakeside Long Run',
      category: 'Running',
      difficulty: 'Advanced',
      durationMinutes: 60,
      caloriesBurnEstimate: 700,
      tags: ['endurance', 'outdoor', 'cardio'],
    },
    {
      title: 'Power Kettlebell Flow',
      category: 'Strength',
      difficulty: 'Intermediate',
      durationMinutes: 30,
      caloriesBurnEstimate: 350,
      tags: ['strength', 'mobility', 'full-body'],
    },
    {
      title: 'Lunch Break Spin',
      category: 'Cycling',
      difficulty: 'Beginner',
      durationMinutes: 25,
      caloriesBurnEstimate: 240,
      tags: ['bike', 'cardio', 'quick'],
    },
    {
      title: 'Core Reset Yoga',
      category: 'Mobility',
      difficulty: 'Beginner',
      durationMinutes: 20,
      caloriesBurnEstimate: 120,
      tags: ['yoga', 'recovery', 'core'],
    },
  ];

  await Promise.all([
    UserModel.deleteMany({}),
    TeamModel.deleteMany({}),
    ActivityModel.deleteMany({}),
    LeaderboardModel.deleteMany({}),
    WorkoutModel.deleteMany({}),
  ]);

  const [insertedTeams, insertedUsers, insertedActivities, insertedLeaderboard, insertedWorkouts] =
    await Promise.all([
      TeamModel.insertMany(teams),
      UserModel.insertMany(users),
      ActivityModel.insertMany(activities),
      LeaderboardModel.insertMany(leaderboard),
      WorkoutModel.insertMany(workouts),
    ]);

  console.log(
    `Inserted ${insertedTeams.length} teams, ${insertedUsers.length} users, ${insertedActivities.length} activities, ${insertedLeaderboard.length} leaderboard entries, and ${insertedWorkouts.length} workouts.`,
  );

  await mongoose.disconnect();
}

seedDatabase().catch(async (error) => {
  console.error('Failed to seed octofit_db', error);
  await mongoose.disconnect();
  process.exit(1);
});
