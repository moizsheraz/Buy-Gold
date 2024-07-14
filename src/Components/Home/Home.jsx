import React from 'react'
import Navbar from './Navbar/Navbar.jsx'
import HomeContent from './HomeContent/HomeContent.jsx'
import BuyRSMINE from '../Home/Buy Runescape/BuyRuneScape.jsx'
import VisaCards from './VisaCards/VisaCards.jsx'
import Footer from '../Footer/Footer.jsx'
import Faqs from './Faqs/Faqss.jsx'
import Login from '../Forms/Login/Login.jsx'
import ChatBtn from '../ChatBtn/ChatBtn.jsx'

function Home() {
  return (
    <div>
      <ChatBtn/>
      <Navbar/>
      <HomeContent/>
      <Faqs/>
      <BuyRSMINE/>
      <VisaCards/>
      <Footer/>
    </div>
  )
}

export default Home
