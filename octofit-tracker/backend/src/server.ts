import express from 'express';

import { connectToDatabase, mongoUri } from './config/database';
import { ActivityModel } from './models/activity';
import { LeaderboardModel } from './models/leaderboard';
import { TeamModel } from './models/team';
import { UserModel } from './models/user';
import { WorkoutModel } from './models/workout';

export const app = express();
const port = Number(process.env.PORT) || 8000;
const codespaceName = process.env.CODESPACE_NAME;
export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', apiBaseUrl });
});

app.get('/api/users/', async (_req, res) => {
  const items = await UserModel.find().sort({ name: 1 }).lean();
  res.json({ resource: 'users', items, apiBaseUrl });
});

app.get('/api/teams/', async (_req, res) => {
  const items = await TeamModel.find().sort({ totalPoints: -1, name: 1 }).lean();
  res.json({ resource: 'teams', items, apiBaseUrl });
});

app.get('/api/activities/', async (_req, res) => {
  const items = await ActivityModel.find().sort({ completedAt: -1 }).lean();
  res.json({ resource: 'activities', items, apiBaseUrl });
});

app.get('/api/leaderboard/', async (_req, res) => {
  const items = await LeaderboardModel.find().sort({ rank: 1 }).lean();
  res.json({ resource: 'leaderboard', items, apiBaseUrl });
});

app.get('/api/workouts/', async (_req, res) => {
  const items = await WorkoutModel.find().sort({ difficulty: 1, title: 1 }).lean();
  res.json({ resource: 'workouts', items, apiBaseUrl });
});

export async function startServer() {
  try {
    await connectToDatabase();
    console.log(`Connected to MongoDB at ${mongoUri}`);
    console.log(`API base URL: ${apiBaseUrl}`);

    app.listen(port, () => {
      console.log(`Backend server listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
}
