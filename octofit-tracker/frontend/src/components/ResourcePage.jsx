import { useEffect, useState } from 'react'

import { fetchCollection } from '../lib/api.js'

function ResourcePage({ title, description, resource, emptyMessage, renderCard }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isActive = true

    async function loadResource() {
      try {
        setLoading(true)
        setError('')
        const { items: nextItems } = await fetchCollection(resource)

        if (isActive) {
          setItems(nextItems)
        }
      } catch (loadError) {
        if (isActive) {
          setError(loadError instanceof Error ? loadError.message : 'Unable to load data')
        }
      } finally {
        if (isActive) {
          setLoading(false)
        }
      }
    }

    loadResource()

    return () => {
      isActive = false
    }
  }, [resource])

  return (
    <section className="resource-page">
      <header className="resource-header">
        <div className="resource-copy">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="resource-status">{items.length} records</div>
      </header>

      {loading ? <div className="resource-state">Loading {title.toLowerCase()}…</div> : null}
      {error ? <div className="resource-state is-error">{error}</div> : null}
      {!loading && !error && items.length === 0 ? (
        <div className="resource-state">{emptyMessage}</div>
      ) : null}

      {!loading && !error && items.length > 0 ? (
        <div className="resource-grid">
          {items.map((item) => (
            <article className="resource-card" key={item._id ?? JSON.stringify(item)}>
              {renderCard(item)}
            </article>
          ))}
        </div>
      ) : null}
    </section>
  )
}

export default ResourcePage
