import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <ul className="hidden font-satoshi font-medium text-nowrap md:flex md:gap-6">
        <li><NavLink to={"/"}>Shop</NavLink></li>
        <li><NavLink to={"/shop"}>On Sale</NavLink></li>
        <li><NavLink to={"/new-arrivals"}>New Arrivals</NavLink></li>
        <li><NavLink to={"/brands"}>Brands</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar