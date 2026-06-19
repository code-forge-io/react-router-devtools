import { useFetcher, useLoaderData, useSubmit } from "react-router"
import type { Route } from "./+types/home"

export const loader = async () => {
  // A deferred promise + a BigInt exercise the devtools data/serialization viewer.
  const slowPromise = new Promise((resolve) => setTimeout(() => resolve("resolved later"), 300))
  return { message: "Hello from React Router v8 + Vite 8!", slowPromise, bigInt: BigInt(8) }
}

export const action = async ({ request }: Route.ActionArgs) => {
  await new Promise((resolve) => setTimeout(resolve, 150))
  return { method: request.method, ok: true }
}

const buttonStyle = {
  padding: "0.625rem 1.25rem",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: "#ffffff",
  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
  border: "1px solid rgba(59, 130, 246, 0.3)",
  borderRadius: "0.5rem",
  cursor: "pointer",
}

export default function Home() {
  const { message } = useLoaderData<typeof loader>()
  const fetcher = useFetcher()
  const submit = useSubmit()

  return (
    <main
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        gap: "2rem",
        background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        color: "white",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", margin: 0 }}>
          React Router DevTools
          <br />
          <span style={{ color: "#60a5fa" }}>on RR v8 + Vite 8</span>
        </h1>
        <p style={{ opacity: 0.9, marginTop: "1rem" }}>{message}</p>
      </div>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button type="button" style={buttonStyle} onClick={() => fetcher.submit(null, { method: "get" })}>
          Fetcher loader
        </button>
        <button type="button" style={buttonStyle} onClick={() => submit(null, { method: "post" })}>
          Submit action
        </button>
      </div>
    </main>
  )
}
