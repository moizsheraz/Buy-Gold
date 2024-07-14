import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import Faqs from '../Home/Faqs/Faqss.jsx'
import VisaCards from '../Home/VisaCards/VisaCards.jsx'
import BuyRSMINE from '../Home/Buy Runescape/BuyRuneScape.jsx'
import Footer from '../Footer/Footer.jsx'
import BuyRSPS from './BuyRSPS/BuyRSPS.jsx'
import ChatBtn from '../ChatBtn/ChatBtn.jsx'
function BuyRSPSGold() {
  return (
    <div>
      <ChatBtn/>
      <Navbar/>
      <BuyRSPS/>
      <Faqs/>
      <BuyRSMINE/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default BuyRSPSGold
