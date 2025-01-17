import React from "react";
import Footer from "./Footer";
import TokenChecker from "../Components/TokenChecker";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";
import Breadcrumbs from "./Breadcrumbs";
import { useLocation } from "react-router-dom";

interface IMasterPage {
  children: React.ReactNode;
}

const MasterPage = ({ children }: IMasterPage) => {
  const location = useLocation();

  return (
    <TokenChecker>
      <div className={`min-h-screen w-screen gap-3 overflow-auto pt-16`}>
        <Header />
        <Navbar />
        <div className="pr-60 py-16">
          <div className="px-8 relative">
            <div className="absolute -top-8">
              <Breadcrumbs url={location.pathname} />
            </div>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </TokenChecker>
  );
};

export default MasterPage;
