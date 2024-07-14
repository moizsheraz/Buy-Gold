import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import SellGolds from './SellGolds/SellGolds.jsx'
import BuyRSMINE from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from '../Home/VisaCards/VisaCards.jsx'
import Footer from '../Footer/Footer.jsx'
import ChatBtn from '../ChatBtn/ChatBtn.jsx'

function SellGold() {
  return (
    <div>
      <ChatBtn/>
      <Navbar/>
     <SellGolds/>
     <BuyRSMINE/>
     <VisaCards/>
     <Footer/>
    </div>
  )
}

export default SellGold
