import { NavLink, Navigate, Route, Routes } from 'react-router-dom'

import logo from '../../../docs/octofitapp-small.png'
import './App.css'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import { apiBaseUrl, codespaceName } from './lib/api.js'

const routes = [
  { label: 'Users', path: '/users' },
  { label: 'Teams', path: '/teams' },
  { label: 'Activities', path: '/activities' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Workouts', path: '/workouts' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="hero-band">
        <div className="hero-copy">
          <span className="eyebrow">React 19 Presentation Tier</span>
          <h1>OctoFit Tracker</h1>
          <p className="hero-text">
            Navigate live team, workout, leaderboard, user, and activity data from
            the Express API without hardcoding a Codespaces hostname.
          </p>
          <div className="hero-meta">
            <span className="meta-chip">API target: {apiBaseUrl}</span>
            <span className="meta-chip">
              {codespaceName
                ? `VITE_CODESPACE_NAME=${codespaceName}`
                : 'VITE_CODESPACE_NAME unset, using localhost fallback'}
            </span>
          </div>
        </div>
        <div className="hero-card">
          <img src={logo} alt="OctoFit Tracker logo" className="hero-logo" />
          <p className="hero-card-title">Environment setup</p>
          <p className="hero-card-copy">
            Define <strong>VITE_CODESPACE_NAME</strong> in <strong>.env.local</strong>{' '}
            for Codespaces. If it is missing, the UI safely falls back to{' '}
            <strong>http://localhost:8000/api</strong>.
          </p>
        </div>
      </header>

      <nav className="section-nav" aria-label="OctoFit sections">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) =>
              isActive ? 'section-link is-active' : 'section-link'
            }
          >
            {route.label}
          </NavLink>
        ))}
      </nav>

      <main className="content-panel">
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
