import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"

const container = document.getElementById("root")

// for intents and purposes for this app, enable msw for every environment
// in an app with an actual backend, we'd want to add an if statement to check if prod or dev
async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  
  return worker.start()
}

if (container) {
  const root = createRoot(container)

  enableMocking().then(() => root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  ))
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
