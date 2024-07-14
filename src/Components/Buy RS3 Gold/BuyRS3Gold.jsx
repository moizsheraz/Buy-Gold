import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import BuyRS3 from './BuyRS3Main/BuyRS3.jsx'
import BuyRSMINE from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from '../Home/VisaCards/VisaCards'
import Footer from '../Footer/Footer.jsx'
import FAQS from '../Home/Faqs/Faqss.jsx'
import ChatBtn from '../ChatBtn/ChatBtn.jsx'

function BuyRS3Gold() {
  return (
    <div>
      <ChatBtn/>
      <Navbar/>
      <BuyRS3 />
      <FAQS/>
      <BuyRSMINE/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default BuyRS3Gold
