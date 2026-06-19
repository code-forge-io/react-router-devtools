import { Links, Meta, type MetaFunction, Outlet, Scripts, ScrollRestoration } from "react-router"
import type { Route } from "./+types/root"

// Server middleware — exercises react-router-devtools' middleware augmentation.
const loggingMiddleware: Route.MiddlewareFunction = async ({ request }, next) => {
  console.log("Server middleware - request:", request.url)
  return next()
}

export const middleware: Route.MiddlewareFunction[] = [loggingMiddleware]

// Client middleware
const clientLoggingMiddleware: Route.ClientMiddlewareFunction = async ({ request }, next) => {
  console.log("Client middleware - request:", request.url)
  return next()
}

export const clientMiddleware: Route.ClientMiddlewareFunction[] = [clientLoggingMiddleware]

export const meta: MetaFunction = () => [
  { title: "React Router v8 + Vite 8 DevTools" },
  { name: "description", content: "React Router DevTools running on React Router v8 and Vite 8" },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ margin: 0 }}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
