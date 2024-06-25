import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import { store } from "./app/store"
import "./index.css"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const container = document.getElementById("root")

async function enableMocking() {
  const { worker } = await import('./mocks/browser')
  
  await worker.start({
    serviceWorker: {
      url: '/stackline-oa/mockServiceWorker.js',
    },
  })
}

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins','-apple-system', 'BlinkMacSystemFont', "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "sans-serif"].join(',')
  },
});

if (container) {
  const root = createRoot(container)

  enableMocking().then(() => {
    root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
  )})
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
