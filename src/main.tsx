import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { worker } from "./mocks/browser"

const container = document.getElementById("root")

async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  // const url = process.env.NODE_ENV === 'development' ? 'mockServiceWorker.js' : 'stackline-oa/mockServiceWorker.js'

  console.log(worker)
  
  
  await worker.start({
    serviceWorker: {
      url: 'mockServiceWorker.js',
    },
  })
}

if (container) {
  const root = createRoot(container)

  enableMocking().then(() => {
    console.log(worker)
    root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )})
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
