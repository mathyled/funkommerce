import styles from "./Desplegable.module.css"
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Detail from '../../FunkoDetail/Detail/Detail';

function Desplegable() {
  return (

          <Navbar>
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>

  );
}

function Navbar(props) {
  return (
       <nav className={styles.navbar} >
      <ul className={styles["navbar-nav"]}><p>Product Details</p>{props.children}</ul>
    </nav>
 
   
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles["nav-item"]}>
      <a className={styles["icon-button"]} onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <div className={styles.dropdown} style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <Detail />
        </div>
      </CSSTransition>
    </div>
  );
}

export default Desplegable;
