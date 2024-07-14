import React from 'react'
import discard from './../../images/discord.png'
import style from './ChatBTn.module.css'
function ChatBtn() {
  return (
    <div>
      <div className={style.discord}>

      <a href="https://discord.gg/Q9HU6jje">
      <img src={discard} alt="discord" />
      </a>
      </div>
    </div>
  )
}

export default ChatBtn
