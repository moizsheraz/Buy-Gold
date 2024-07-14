import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import FAQS from './FAQS/FAQS'
import FAQCard from './FAQS/FAQCard.jsx'
import BuyRSMINE from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from '../Home/VisaCards/VisaCards.jsx'
import Footer from '../Footer/Footer.jsx'
import ChatBtn from '../ChatBtn/ChatBtn.jsx'

function FAQ() {
  return (
    <div>
      <ChatBtn/>
      <Navbar/>
      <FAQS/>
      <FAQCard/>
      <BuyRSMINE/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default FAQ
