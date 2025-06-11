import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen m-2 md:m-0">
      <header>
        <Navbar />
      </header>
      {/* main conteant */}
      <div className="flex-1">
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
