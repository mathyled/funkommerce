import React, { useState } from 'react'
import Chatbot from 'react-chatbot-kit'
import config from '../ChatBot/config'
import ActionProvider from '../ChatBot/ActionProvider'
import MessageParser from '../ChatBot/MessageParser'
import style from '../Footer/Footer.module.css'

function Button() {
    return (
      <div className="bot">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    )
  }
  
  function Footer() {
    let [click, setClick] = useState(false)
  
    let handleClick = (e) => {
      setClick(!click)
  
      if(click){
        document.getElementById('funko').classList.remove('btn-no-round') 
      } else{
        document.getElementById('funko').classList.add('btn-no-round')
      }
    }

    return (
        <div className = {style.container}>
            <button id ='funko' className={style.btn} onClick ={handleClick}></button>
            {click ? <Button /> : null}
        </div>
    )
}

export default Footer