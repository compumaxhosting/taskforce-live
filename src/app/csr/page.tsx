import React from "react";
import Header from "../components/navbar/Header";
import TaskForceOverview from "../components/TaskForceOverview";
import Csr from "../components/Csr";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";
const page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview subheading="CSR" heading="Task Force Interiors" />
      <Csr />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default page;
