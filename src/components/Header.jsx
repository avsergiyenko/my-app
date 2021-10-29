import React from "react";
import logo from "../icons/logo.png";
import fb from "../icons/fb.svg";
import insta from "../icons/insta.svg";
import menuArrow from "../icons/arrow.svg";

function Header () {
    return (
        <div className="wrapper">
            <header className="header">
            <div className="header__container container">
                <a className="logo-link" href="#home">
                <img className="logo" src={logo} alt="logo"/>
                </a>
                <input className="phone" type="tel" inputmode="text" size="13" placeholder="+38(0__)___ __ __"/>
                <button className="contact-button">свяжитесь со мной</button>                
                {/* <a href="https://www.facebook.com/y.uzelok">*/}<img className="fb-icon" src={fb} alt="facebook icon"/>{/*</a>*/}
                {/*<a href="https://www.instagram.com/duende_quality/">*/}<img className="insta-icon" src={insta} alt="instagram icon"/>{/*</a>*/}
                <div className="language-bar">
                    <a href="#ukr">UK</a>
                    <a href="#ru">RU</a>
                </div>
            </div>
            </header>
            <nav className="navbar">
                <div className="nav__container container">
                    <a href="#winter">Зимняя коллекция <img src={menuArrow} alt=""/></a>
                    <a href="#summer">Летняя коллекция <img src={menuArrow} alt=""/></a>
                    <a href="#blog">Блог</a>
                    <a href="#about">О нас</a>
                </div>
            </nav>            
        </div>
        )
}

export default Header;
