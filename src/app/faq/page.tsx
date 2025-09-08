import React from 'react'
import Header from '../components/Header'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
     <div className="bg-[#eef9f9]">
       <Header />
     </div>
      <Faq />
      <Footer />
    </>
  )
}

export default page
