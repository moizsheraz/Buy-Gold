import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Refund from './Refund/Refund.jsx'
import FAQCard from '../FAQ/FAQS/FAQCard.jsx'
import BuyRSMINE from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from '../Home/VisaCards/VisaCards.jsx'
import Footer from '../Footer/Footer.jsx'
import ChatBtn from '../ChatBtn/ChatBtn.jsx'

function RefundPolicy() {
  return (
    <div>
      <ChatBtn/>
      <Navbar/>
      <Refund/>
      <FAQCard/>
      <BuyRSMINE/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default RefundPolicy
