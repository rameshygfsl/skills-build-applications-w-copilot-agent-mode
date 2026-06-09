import ResourcePage from './ResourcePage.jsx'

function Workouts() {
  // Codespaces endpoint shape reference: -8000.app.github.dev/api/workouts
  return (
    <ResourcePage
      title="Workouts"
      description="Suggested sessions pulled from the backend workout catalog."
      resource="workouts"
      emptyMessage="No workouts are available yet."
      renderCard={(workout) => (
        <>
          <h3>{workout.title}</h3>
          <dl className="resource-list">
            <div className="resource-row">
              <dt>Category</dt>
              <dd>{workout.category}</dd>
            </div>
            <div className="resource-row">
              <dt>Difficulty</dt>
              <dd>{workout.difficulty}</dd>
            </div>
            <div className="resource-row">
              <dt>Duration</dt>
              <dd>{workout.durationMinutes} min</dd>
            </div>
            <div className="resource-row">
              <dt>Tags</dt>
              <dd>{Array.isArray(workout.tags) ? workout.tags.join(', ') : 'No tags'}</dd>
            </div>
          </dl>
        </>
      )}
    />
  )
}

export default Workouts