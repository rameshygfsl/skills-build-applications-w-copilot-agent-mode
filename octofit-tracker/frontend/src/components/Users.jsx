import ResourcePage from './ResourcePage.jsx'

function Users() {
  // Codespaces endpoint shape reference: -8000.app.github.dev/api/users
  return (
    <ResourcePage
      title="Users"
      description="Active member profiles, team assignments, and training goals from the OctoFit API."
      resource="users"
      emptyMessage="No users are available yet. Seed the backend database and refresh."
      renderCard={(user) => (
        <>
          <h3>{user.name}</h3>
          <dl className="resource-list">
            <div className="resource-row">
              <dt>Email</dt>
              <dd>{user.email}</dd>
            </div>
            <div className="resource-row">
              <dt>Team</dt>
              <dd>{user.teamName}</dd>
            </div>
            <div className="resource-row">
              <dt>Fitness level</dt>
              <dd>{user.fitnessLevel}</dd>
            </div>
            <div className="resource-row">
              <dt>Goals</dt>
              <dd>{Array.isArray(user.goals) ? user.goals.join(', ') : 'None listed'}</dd>
            </div>
          </dl>
        </>
      )}
    />
  )
}

export default Users
