import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout