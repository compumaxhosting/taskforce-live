import React from 'react'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import PortFolio from '../components/PortFolio'

const page = () => {
  return (
    <>
     <div className="bg-[#eef9f9]">
  <Header />
</div>
      <Gallery />
      <PortFolio />
      <Footer />
    </>
  )
}

export default page
