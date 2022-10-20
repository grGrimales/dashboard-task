import { useEffect, useState } from "react";

import { VscBellDot } from 'react-icons/vsc';
import { MdKeyboardArrowDown } from 'react-icons/md';


import styles from '../../styles/Navbar.module.scss'


export const Navbar = () => {
    // const [click, setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    // useEffect(() => {

    //     window.onscroll = function () {
    //       const scrollTop = document.documentElement.scrollTop;

    //       if (scrollTop > 20) {
    //         setScroll(true);
    //       } else if (scrollTop < 20) {
    //         setScroll(false);
    //       }

    //     };

    //     const handleInnerWidth = () => {
    //       if (window.innerWidth < 760) {
    //         setClick(false);
    //         const body = document.getElementById("body");
    //         body.classList.add("body_move");  
    //     }
    //     };

    //     window.addEventListener("resize", handleInnerWidth);

    //     return () => {
    //       window.removeEventListener("resize", handleInnerWidth);
    //     };
    //   }, []);
    return (
        <header className={styles.header}>
                <navbar  className={styles.navbar}>
                    <div   className={styles.navbar__text}>
                    <h2 className={styles.navbar__title}>Hola, 
                        <span> Andrea Sotil</span>
                    </h2>

                    <p>Tienes <span>3 alertas</span> esperando por ti</p>
                    </div>
                   

                    <div className={styles.navbar__icon}>
                       <VscBellDot/> 
                       <MdKeyboardArrowDown/>
                    </div>
                </navbar>
            {/* <header>
    
      <img src="../img/logo1.png" alt="Logo" width="100" height="80" />
    </header>
    <div className="menu__side" id="menu_side">
      <div className="name__page">
        <img src="../img/lateral.png" alt="Logo" />
        <h4 className="titulo-sidebar">Vocabulary</h4>
      </div>

      <div className="options__menu">
        <a href="../index.html">
          <div className="option">
            <i className="fas fa-home" title="Inicio"></i>
            <h4>Inicio</h4>
          </div>
        </a>

        <a href="#" className="selected">
          <div className="option">
            <i className="fas fa-chalkboard-teacher" title="Vocabulario"></i>
            <h4>Vocabulario</h4>
          </div>
        </a>

        <a href="./ejercicios.html">
          <div className="option">
            <i className="fas fa-clipboard-list" title="Ejercicios"></i>
          </div>
        </a>

        <a href="#">
          <div className="option">
            <i className="fas fa-video" title="Vídeos"></i>
            <h4>Vídeos</h4>
          </div>
        </a>

        <a href="#" id="logout">
          <div className="option">
            <i className="fas fa-sign-out-alt" title="Logout"></i>
            <h4>Logout</h4>
          </div>
        </a>
      </div>
    </div> */}

        </header>
    )
}
