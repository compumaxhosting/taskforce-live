import React from "react";
import Header from "../components/navbar/Header";
import TaskForceOverview from "../components/TaskForceOverview";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import MapOnly from "../components/MapOnly";
import Copyright from "../components/Copyright";
import BackToTop from "../components/BackToTop";

const page = () => {
  return (
    <>
      <Header />
      <TaskForceOverview
        subheading="Contact Us"
        heading="Task Force Interiors"
      />
      <MapOnly />
      <ContactForm />
      <Footer />
      <Copyright />
      <BackToTop />
    </>
  );
};

export default page;
