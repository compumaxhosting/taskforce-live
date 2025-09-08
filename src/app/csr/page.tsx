import React from 'react'
import Header from '../components/Header'
import Csr from '../components/Csr'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <div className="bg-[#eef9f9]">
        <Header />
      </div>
      <Csr />
      <Footer />
    </div>
  )
}

export default page
