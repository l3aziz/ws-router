import React, { useState } from "react";
import Navmain from "./components/Navmain";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
function Layout() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <div>
      <Navmain  />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
