import React from "react";
import Header from "../components/navbar/Header";
import TaskForceOverview from "../components/TaskForceOverview";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";

const page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview subheading="Clients" heading="Task Force Interiors" />
      <Clients />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default page;
