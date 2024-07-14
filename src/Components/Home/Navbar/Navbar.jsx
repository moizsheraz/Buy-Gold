import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import image from '../../../images/twitters.png';
import { IoMenu } from 'react-icons/io5';
import { RiContactsFill } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import Login from '../../Forms/Login/Login.jsx';
import SignUp from '../../Forms/SignUp/SignUp.jsx';
import GiftForm from '../../Forms/GiftCardForm/GiftForm.jsx';
import stars from '../../../images/stars.png';

function Navbar() {
  const leftMenuRef = useRef(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isRedeemOpen, setIsRedeemOpen] = useState(false);
  const loginRef = useRef(null);
  const signUpRef = useRef(null);
  const redeemRef = useRef(null);
  const [isAuthorized, setIsAuthorized] = useState(false); // Add this state
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname); // State for active link

  useEffect(() => {
    setIsAuthorized(localStorage.getItem('isAuthorized') === 'true');
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  function handleMenu() {
    if (leftMenuRef.current) {
      leftMenuRef.current.style.transform = 'translateX(0%)';
    }
  }

  function handleClose() {
    if (leftMenuRef.current) {
      leftMenuRef.current.style.transform = 'translateX(-100%)';
    }
  }

  function openLogin() {
    setIsLoginOpen(true);
    setIsSignUpOpen(false);
    setIsRedeemOpen(false);
    handleClose(); // Close the left nav bar
  }

  function closeLogin() {
    setIsLoginOpen(false);
  }

  function openSignUp() {
    setIsSignUpOpen(true);
    setIsLoginOpen(false);
    setIsRedeemOpen(false);
    handleClose(); // Close the left nav bar
  }

  function closeSignUp() {
    setIsSignUpOpen(false);
  }

  function openRedeem() {
    setIsRedeemOpen(true);
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
    handleClose(); // Close the left nav bar
  }

  function closeRedeem() {
    setIsRedeemOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        closeLogin();
      }
      if (signUpRef.current && !signUpRef.current.contains(event.target)) {
        closeSignUp();
      }
      if (redeemRef.current && !redeemRef.current.contains(event.target)) {
        closeRedeem();
      }
    }

    if (isLoginOpen || isSignUpOpen || isRedeemOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLoginOpen, isSignUpOpen, isRedeemOpen]);

  const isModalOpen = isLoginOpen || isSignUpOpen || isRedeemOpen;

  return (
    <div className={styles.navbar}>
      {isModalOpen && <div className={styles.blueOverlay}></div>}
      
      {isLoginOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent} ref={loginRef}>
            <Login onClose={closeLogin} openSignUp={openSignUp} />
          </div>
        </div>
      )}
      {isSignUpOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent} ref={signUpRef}>
            <SignUp onClose={closeSignUp} openLogin={openLogin} />
          </div>
        </div>
      )}
      {isRedeemOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent} ref={redeemRef}>
            <GiftForm onClose={closeRedeem} />
          </div>
        </div>
      )}

      {/* Left Menu */}
      <div className={styles.leftMenu} ref={leftMenuRef}>
        <RxCross1 onClick={handleClose} className={styles.cros} />

        <div className={styles.leftnavItems2}>
          {!isAuthorized && (
            <>
              <button onClick={openLogin} className={styles.btn1}>LOG IN</button>
              <button onClick={openSignUp} className={styles.btn2}>SIGN UP</button>
            </>
          )}
          {isAuthorized && (
            <>
              <Link to="/TrancHistory">
                <button className={styles.btn3}>Account</button>
              </Link>
            </>
          )}
        </div>
        <hr />
        <div className={styles.leftNavLinks}>
          <Link
            to="/"
            className={`${styles.leftLinks} ${activeLink === '/' ? styles.active : ''}`}
            onClick={() => setActiveLink('/')}
          >
            Buy OSRS Gold
          </Link>
          <Link
            to="/BuyRS3Gold"
            className={`${styles.leftLinks} ${activeLink === '/BuyRS3Gold' ? styles.active : ''}`}
            onClick={() => setActiveLink('/BuyRS3Gold')}
          >
            Buy RS3 Gold
          </Link>
          <Link
            to="/BuyRSPSGold"
            className={`${styles.leftLinks} ${activeLink === '/BuyRSPSGold' ? styles.active : ''}`}
            onClick={() => setActiveLink('/BuyRSPSGold')}
          >
            Buy RSPS Gold
          </Link>
          <Link
            to="/SellGold"
            className={`${styles.leftLinks} ${activeLink === '/SellGold' ? styles.active : ''}`}
            onClick={() => setActiveLink('/SellGold')}
          >
            Sell Gold
          </Link>
        </div>
        <div className={styles.leftNavLinks2}>
          <Link to="/FAQ" className={styles.leftLinks}>FAQ</Link>
          <Link to="/Support" className={styles.leftLinks}>Support</Link>
          <Link className={styles.leftLinks}>Blog</Link>
          <Link className={styles.leftLinks} onClick={openRedeem}>Redeem Gift Card</Link>
        </div>
        <div className={styles.leftnavrating}>
          <p>4.7 out of 5 based on 806 user rating</p>
          <div>
            <img src={stars} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.topnav}>
        <div className={styles.topnav1}>
          <Link to="/FAQ" className={styles.links}>FAQ</Link>
          <Link to="/Support" className={styles.links}>Support</Link>
          <Link className={styles.links}>Blog</Link>
          <Link className={styles.links} onClick={openRedeem}>Redeem Gift Card</Link>
        </div>
        <div className={styles.topnav2}>
          <p>4.7 out of 5 based on 806 user ratings</p>
          <img className={styles.stars} src={stars} alt="" />
        </div>
      </div>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <IoMenu onClick={handleMenu} className={styles.menubar} />
          <Link className={styles.logoLink} to="/"><img src={image} alt="" /></Link>
          <RiContactsFill onClick={openLogin} className={styles.contact} />
        </div>
        <div className={styles.navItems}>
          <div className={styles.navItems1}>
            <Link
              to="/"
              className={`${styles.navLinks} ${activeLink === '/' ? styles.active : ''}`}
              onClick={() => setActiveLink('/')}
            >
              Buy OSRS Gold
            </Link>
            <Link
              to="/BuyRS3Gold"
              className={`${styles.navLinks} ${activeLink === '/BuyRS3Gold' ? styles.active : ''}`}
              onClick={() => setActiveLink('/BuyRS3Gold')}
            >
              Buy RS3 Gold
            </Link>
            <Link
              to="/BuyRSPSGold"
              className={`${styles.navLinks} ${activeLink === '/BuyRSPSGold' ? styles.active : ''}`}
              onClick={() => setActiveLink('/BuyRSPSGold')}
            >
              Buy RSPS Gold
            </Link>
            <Link
              to="/SellGold"
              className={`${styles.navLinks} ${activeLink === '/SellGold' ? styles.active : ''}`}
              onClick={() => setActiveLink('/SellGold')}
            >
              Sell Gold
            </Link>
          </div>
          <div className={styles.navItems2}>
            {!isAuthorized && (
              <>
                <button onClick={openLogin} className={styles.btn1}>LOG IN</button>
                <button onClick={openSignUp} className={styles.btn2}>SIGN UP</button>
              </>
            )}
            {isAuthorized && (
              <Link to="/TrancHistory">
                <button className={styles.btn3}>Account</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
