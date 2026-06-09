import ResourcePage from './ResourcePage.jsx'

function Teams() {
  // Codespaces endpoint shape reference: -8000.app.github.dev/api/teams
  return (
    <ResourcePage
      title="Teams"
      description="Competitive squads, shared focus areas, and current scoring totals."
      resource="teams"
      emptyMessage="No teams are available yet."
      renderCard={(team) => (
        <>
          <h3>{team.name}</h3>
          <dl className="resource-list">
            <div className="resource-row">
              <dt>Motto</dt>
              <dd>{team.motto}</dd>
            </div>
            <div className="resource-row">
              <dt>Focus</dt>
              <dd>{team.focus}</dd>
            </div>
            <div className="resource-row">
              <dt>Members</dt>
              <dd>{team.memberCount}</dd>
            </div>
            <div className="resource-row">
              <dt>Total points</dt>
              <dd>{team.totalPoints}</dd>
            </div>
          </dl>
        </>
      )}
    />
  )
}

export default Teams
