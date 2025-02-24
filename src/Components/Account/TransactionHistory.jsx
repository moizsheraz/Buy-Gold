import React from 'react'
import Navbar from '../Home/Navbar/Navbar'
import TrancHistory from './TrancHistory'
import FAQCard from '../FAQ/FAQS/FAQCard'
import BuyRSMINE from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from '../Home/VisaCards/VisaCards'
import Footer from '../Footer/Footer'
import ChatBtn from '../ChatBtn/ChatBtn.jsx'

function TransactionHistory() {
  return (
    <div>
      <ChatBtn/>
      <Navbar/>
      <TrancHistory/>
      <FAQCard/>
      <BuyRSMINE/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default TransactionHistory
