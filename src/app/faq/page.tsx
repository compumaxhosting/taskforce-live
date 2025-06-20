import React from "react";
import Header from "../components/navbar/Header";
import TaskForceOverview from "../components/TaskForceOverview";

import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";

const Page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview subheading="FAQ" heading="Task Force Interiors" />
      <Faq />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default Page;
