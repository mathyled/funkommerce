import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './Footer.module.css';

 
  function Footer() {
    
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
      <div className={Styles.container}>
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




