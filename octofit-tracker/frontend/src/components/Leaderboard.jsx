import ResourcePage from './ResourcePage.jsx'

function Leaderboard() {
  // Codespaces endpoint shape reference: -8000.app.github.dev/api/leaderboard
  return (
    <ResourcePage
      title="Leaderboard"
      description="Top performers ranked by total points and current streaks."
      resource="leaderboard"
      emptyMessage="No leaderboard entries are available yet."
      renderCard={(entry) => (
        <>
          <h3>
            #{entry.rank} {entry.userName}
          </h3>
          <dl className="resource-list">
            <div className="resource-row">
              <dt>Team</dt>
              <dd>{entry.teamName}</dd>
            </div>
            <div className="resource-row">
              <dt>Total points</dt>
              <dd>{entry.totalPoints}</dd>
            </div>
            <div className="resource-row">
              <dt>Streak</dt>
              <dd>{entry.streakDays} days</dd>
            </div>
          </dl>
        </>
      )}
    />
  )
}

export default Leaderboard
