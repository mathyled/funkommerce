import React, { useState } from 'react'
import Chatbot from 'react-chatbot-kit'
import config from '../ChatBot/config'
import ActionProvider from '../ChatBot/ActionProvider'
import MessageParser from '../ChatBot/MessageParser'
import funkoImg from './funicon2.ico';
import './Chatbot-btn.css'

function Button() {
    return (
      <div>        
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />        
      </div>
    )
  }

  function ChatbotBtn() {
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
        <div>
        <div className = 'container-chatbot'>
        <button id ='funko' className="btn-chat" onClick ={handleClick}>
          <img className='img-chat' src={funkoImg} alt="" />   
        </button>
            {click ? <Button /> : null}
        </div> 
        
      </div>   
     )

    }    
    export default ChatbotBtn