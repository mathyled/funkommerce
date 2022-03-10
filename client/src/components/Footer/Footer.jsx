import React, { useState } from 'react'
import Chatbot from 'react-chatbot-kit'
import config from '../ChatBot/config'
import ActionProvider from '../ChatBot/ActionProvider'
import MessageParser from '../ChatBot/MessageParser'
import Styles from './Footer.module.css';
import {Link} from 'react-router-dom'


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

    const perfiles=[
      {
          url:'#',
          img:''
  
      },
      {
          url:'otro',
          img:'other image'
  
      }
  ];
  

    return (
      <div>
        <div className = {Styles.container}>
            <button id ='funko' className={Styles.btn} onClick ={handleClick}></button>
            {click ? <Button /> : null}
        </div>

<footer className={Styles.footer}>
<section className={Styles.footer_section1}>
  {perfiles.map((perfil,index) => {
    return (
      <a href={perfil.url} key={index}>
        <img src={perfil.img} alt="perfil" />
      </a>
    );
  })}
</section>
<section className={Styles.footer_section}>
  <header>
    <Link to='/about'>About the proyect</Link>
  </header>
  <p>
    Funkommerce es una tienda online desarrollada por un grupo de
    programadores ,que ponen a prueba los conocimientos adquiridos sobre
    desarrollo web, durante la cursada de Henry.
  </p>
</section>
</footer>
</div>
    )
}

export default Footer




