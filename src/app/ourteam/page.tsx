import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Team from '../components/Team'

const page = () => {
  return (
    <>
       <div className="bg-[#eef9f9]">
        <Header />
        <Team />
        <Footer />
      </div>
    </>
  )
}

export default page
