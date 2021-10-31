import React from "react";
import smallLogo from "../icons/logo small.png";


function Footer() {
    return(<div className="wrapper">
        <hr></hr>
        <div className="footer container">
            <div className="footer__column column_left">
                <a className="logo-link" href="#home">
                    <img className="logo" src={smallLogo} alt="logo"/>
                </a>
                <a href="#about">О нас</a>
                <a href="#reviews">Отзывы</a>
                <a href="#order">Процесс заказа</a>
            </div>
            <div className="footer__column column_center">
                <span>Зимняя коллекция</span>
                <a href="#womenHats">Женские головные уборы</a>
                <a href="#childHats">Детские головные уборы</a>
                <a href="#mittings">Варежки</a>
                <a href="#snood">Снуды</a>
            </div>
            <div className="footer__column column_right">
                <span>Летняя коллекция</span>
                <a href="#womenHats">Женские головные уборы</a>
                <a href="#childHats">Детские головные уборы</a>
                <a href="#mittings">Сумки</a>
                <a href="#snood">Топы и майки</a>
            </div>
        </div>
    </div>)
}

export default Footer;