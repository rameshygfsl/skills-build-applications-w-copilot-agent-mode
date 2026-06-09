import ResourcePage from './ResourcePage.jsx'

function Activities() {
  // Codespaces endpoint shape reference: -8000.app.github.dev/api/activities
  return (
    <ResourcePage
      title="Activities"
      description="Recent sessions across cardio, strength, recovery, and team challenges."
      resource="activities"
      emptyMessage="No activities are available yet."
      renderCard={(activity) => (
        <>
          <h3>{activity.type}</h3>
          <dl className="resource-list">
            <div className="resource-row">
              <dt>User</dt>
              <dd>{activity.userName}</dd>
            </div>
            <div className="resource-row">
              <dt>Team</dt>
              <dd>{activity.teamName}</dd>
            </div>
            <div className="resource-row">
              <dt>Duration</dt>
              <dd>{activity.durationMinutes} min</dd>
            </div>
            <div className="resource-row">
              <dt>Calories</dt>
              <dd>{activity.caloriesBurned}</dd>
            </div>
          </dl>
        </>
      )}
    />
  )
}

export default Activities
