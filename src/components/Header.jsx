import { A } from "@solidjs/router"
import Themed from "./Themes"

function Header() {
  return (
    <>
      <nav class="mainNav">
        <A end inactiveClass="inAct" activeClass="onAct" href="/">
          Home
        </A>
        <A inactiveClass="inAct" activeClass="onAct" href="/products">
          Products
        </A>
        <A
          inactiveClass="inAct"
          activeClass="onAct"
          href="/product/Params-ahoy"
        >
          Product
        </A>
        <A inactiveClass="inAct" activeClass="onAct" href="/about">
          About
        </A>
        <Themed />
      </nav>
      <style jsx>{`
        .mainNav {
          display: flex;
          gap: 2rem;
        }
        .onAct {
          color: coral;
        }
        .inAct {
          color: cornflowerblue;
        }
      `}</style>
    </>
  )
}
export default Header
