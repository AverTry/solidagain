/* @refresh reload */
import { lazy } from "solid-js"
import { render } from "solid-js/web"
import { Router, Route } from "@solidjs/router"

import "./global.css"
import Header from "./components/Header"

const root = document.getElementById("root")

const Home = lazy(() => import("./pages/home"))
const Products = lazy(() => import("./pages/products"))
const Product = lazy(() => import("./pages/product"))
const About = lazy(() => import("./pages/about"))

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  )
}

const App = (props) => (
  <>
    <Header />
    <h1>My Splash</h1>
    {props.children}
  </>
)

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/product/:id" component={Product} />
    </Router>
  ),
  root
)
