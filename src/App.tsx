import "./App.css"
import logo from "./assets/stackline_logo.svg"
import { Products } from "./features/products/Products"

const App = () => {
  return (
    <div className="App">
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Products />
    </div>
  )
}

export default App
