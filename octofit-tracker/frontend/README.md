# OctoFit Tracker Frontend

This React 19 presentation tier uses Vite environment variables to target the backend API.

Define `VITE_CODESPACE_NAME` in `.env.local` when running in Codespaces:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

The app will then request data from:

```text
https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

If `VITE_CODESPACE_NAME` is not defined, the frontend safely falls back to:

```text
http://localhost:8000/api/[component]/
```

The resource views accept either direct array payloads or paginated-style payloads such as `{ results: [...] }` or `{ items: [...] }`.

