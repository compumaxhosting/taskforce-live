import React from "react";
import Header from "../components/navbar/Header";
import TaskForceOverview from "../components/TaskForceOverview";
import Footer from "../components/Footer";
import AboutText from "../components/about/AboutText";
import Gallery from "../components/Gallery";
import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";

const page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview
        subheading="Our Equipments"
        heading="Task Force Interiors"
      />
      <AboutText />
      <Gallery />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default page;
