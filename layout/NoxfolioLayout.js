"use client";
import { noxfolioUtilits } from "@/utility";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const NoxfolioLayout = ({
  children,
  footer,
  header,
  noFooter,
  onePageMenu,
}) => {
  useEffect(() => {
    noxfolioUtilits.animaiton();
  }, []);

  return (
    <div className="page-wrapper">
      <GoogleAnalytics />

      <Header header={header} onePageMenu={onePageMenu} />

      {children}

      {!noFooter && <Footer footer={footer} />}
    </div>
  );
};

export default NoxfolioLayout;
