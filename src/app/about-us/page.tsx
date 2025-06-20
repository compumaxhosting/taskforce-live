import React from "react";
import Header from "../components/navbar/Header";
import TaskForceSection from "../components/TaskForceSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import AboutTwo from "../components/about/AboutTwo";
import TaskForceOverview from "../components/TaskForceOverview";
import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";

const page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview subheading="About Us" heading="Task Force Interiors" />
      <AboutTwo />
      <TaskForceSection />
      <TeamSection />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default page;
