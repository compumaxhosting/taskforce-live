import React from "react";
import Header from "../components/navbar/Header";
import TaskForceOverview from "../components/TaskForceOverview";
import Footer from "../components/Footer";
import PortFolio from "../components/PortFolio";
import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";

const page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview
        subheading="Portfolio"
        heading="Task Force Interiors"
      />

      <PortFolio />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default page;
