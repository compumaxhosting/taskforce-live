import React from "react";
import Header from "../components/navbar/Header";
import Footer from "../components/Footer";
import RangeOfServices from "../components/RangeOfServices";
import TaskForceOverview from "../components/TaskForceOverview";
import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";

const page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview subheading="Services" heading="Task Force Interiors" />
      <RangeOfServices />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default page;
