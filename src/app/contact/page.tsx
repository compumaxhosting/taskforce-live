import React from 'react'
import Header from '../components/Header'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
     <div className="bg-[#eef9f9]">
  <Header />
</div>
      <ContactUs />
     
      <Footer />
    </>
  )
}

export default page
