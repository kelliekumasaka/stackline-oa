import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
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
