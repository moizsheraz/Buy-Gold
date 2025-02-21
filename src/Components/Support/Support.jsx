import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import SupportForm from './SupportForm/SupportForm'
import FAQCard from '../FAQ/FAQS/FAQCard.jsx'
import BuyRSMINE from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from '../Home/VisaCards/VisaCards'
import Footer from '../Footer/Footer.jsx'
import ChatBtn from '../ChatBtn/ChatBtn.jsx'

function Support() {
  return (
    <div>
      <ChatBtn/>
      <Navbar/>
      <SupportForm/>
      <FAQCard/>
      <BuyRSMINE/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default Support
