import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Clients from '../components/Clients'

const page = () => {
  return (
    <>
      <div className="bg-[#eef9f9]">
  <Header />
</div>
      <Clients />
      <Footer />
    </>
  )
}

export default page
