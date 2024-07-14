import React, { useState } from 'react';
import styles from './Faqs.module.css';
import { IoIosArrowForward } from 'react-icons/io';

function FAQS() {
  const [openSection, setOpenSection] = useState(null);

  const handleArrow = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div>
      <div className={styles.FAQS}>
        <div className={styles.FAQSBox}>
          <h5>FAQ</h5>

          <div className={styles.FAQSBox1}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section1')}>
              <h4>What isRSMINEgold?</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section1' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section1' ? styles.show : styles.hide}`}>
              <p>RSMINE gold is the virtual currency that is used in both Old SchoolRSMINEandRSMINE3. Players in both games can acquireRSMINEgold through various activities, such as skilling, PvM, PvP, merchanting, questing, and minigames. No matter what activity you’re doing in the game, gold is central to every activity.
							</p>
              <br />
              <br />
              <p>
							RSMINE is known for being a game about grinding to get to the fun content. A lot of the grinding in the game comes down to getting the gold you need to continue. Whether you’re a new player who wants to get a head start or you’re looking to max out your PvM gear, buyingRSMINEgold is a great way to spend less time grinding, and more time doing what you love in the game.</p>
            </div>
          </div>

          <div className={styles.FAQSBox2}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section2')}>
              <h4>Do I need to show you my ID?</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section2' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section2' ? styles.show : styles.hide}`}>
              <p>Unlike our competitors, we do not require our customers to provide any form of personal identification, such as their government ID or passport. Here atRSMINE, we believe in customer’s right to their privacy and the protection of their data.</p>
            </div>
          </div>
          <div className={styles.FAQSBox3}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section3')}>
              <h4>How can I safely buy gold?</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section3' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section3' ? styles.show : styles.hide}`}>
              <p>BuyingRSMINEgold fromRSMINE is the safest option available on the market. We have learned a lot about keeping customers safe from our eight years of experience serving theRSMINEcommunity. Unlike our competitors, we use our in-house accounts, hardware, and technology to trade with you directly. With our position as the best gold shop in the market, we’re trading trillions in gold. With so much volume, we have to take every precaution to remain safe, which ultimately benefits you as the customer.</p>
            </div>
          </div>
          <div className={styles.FAQSBox4}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section4')}>
              <h4>How to make a gold purchase in 5 easy steps</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section4' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section4' ? styles.show : styles.hide}`}>
              <p>Whether this is your first time buyingRSMINEgold, or you’re one of thousands of customers part of theRSMINE community, we want the experience to be as easy as possible for you. You can follow these simple steps below to purchase your gold, and receive it in just a few minutes.
							
              </p>
              <br />
              <br />
<ol>
  <li>Input the amount of the gold that you’d like to purchase.</li>
  <li>Input the RSN of the character that you’ll receive the gold on</li>
  <li>If you have a coupon, please feel free to input it. </li>
  <li>Choose your preferred payment method</li>
<li>Click the Buy Now button</li>
</ol>
            </div>
          </div>
          <div className={styles.FAQSBox5}>
            <div className={styles.FAQdiv} onClick={() => handleArrow('section5')}>
              <h4>Why should I buyRSMINEgold fromRSMINE?</h4>
              <IoIosArrowForward 
                className={`${styles.IoIosArrowForward} ${openSection === 'section5' ? styles.rotate : ''}`} 
              />
            </div>
            <div className={`${styles.FAQpTag} ${openSection === 'section5' ? styles.show : styles.hide}`}>
              <p>Established in 2015,RSMINE has been the leadingRSMINEgold shop for nearly a decade. We are happy to be able to provide multiple payment methods and an unbeatable price, so you have flexibility in how you buy. With our experience and professional staff, trades usually only take a few minutes, so you can get back to what you truly love doing in the game.</p>
              <br />
              <br />
              <p>
							We’ve been honored to serve our community of customers who choose to advance theirRSMINEgaming experience by saving time, energy, and money, and we hope that you’ll be a new member of our community.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FAQS;
