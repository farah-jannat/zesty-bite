import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {/* main conteant */}
      <div>
        <Outlet />
      </div>
      {/* footer  */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
