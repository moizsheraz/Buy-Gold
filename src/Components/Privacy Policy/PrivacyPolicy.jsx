import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import ChatBtn from '../ChatBtn/ChatBtn'
import BuyRSMINE from '../Home/Buy Runescape/BuyRuneScape'
import VisaCards from '../Home/VisaCards/VisaCards'
import Footer from '../Footer/Footer'
import Privacy from './Privacy.jsx'
import FAQCard from '../FAQ/FAQS/FAQCard'
function PrivacyPolicy() {
  return (
    <div>
      <ChatBtn/>
      <Navbar/>
      <Privacy/>
      <FAQCard/>
      <BuyRSMINE/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default PrivacyPolicy
