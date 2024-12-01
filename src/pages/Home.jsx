import React from 'react'
import Banner from '../components/widgets/Banner'
import SpecialCard from '../components/widgets/SpecialCard'
import Button from '../components/UI/Buttons/Button'
import BeforeAfterSection from '../components/Home/BeforeAfterSection'
import Footer from '../components/Layout/Footer'
import WhatsappButton from '../components/Home/WhatsappButton'

const Home = () => {
  return (
    <>
      <Banner />
      <SpecialCard />
      <Button />
      <BeforeAfterSection />
      <Footer />
     <WhatsappButton />
    </>
  )
}

export default Home
