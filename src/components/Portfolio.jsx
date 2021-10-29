import React from "react";
import gloves from "../img/gloves.png";
import hat from "../img/hat.png";
import clock from "../icons/clock.svg";
import hands from "../icons/hands.svg";
import knitting from "../icons/knitting.png";

function Portfolio() {
    return (<div className="wrapper">
        <div className="portfolio container">
            <h1>ПОРТФОЛИО. ПРИМЕРЫ РАБОТ</h1>
            <div className="portfolio-photos">
                <figure>
                    <img src={gloves} alt="gloves" />
                    <figcaption>ЗИМНЯЯ КОЛЛЕКЦИЯ</figcaption>
                </figure>
                <figure>
                    <img src={hat} alt="hat" />
                    <figcaption>ЛЕТНЯЯ КОЛЛЕКЦИЯ</figcaption>
                </figure>
            </div>
            <div className="portfolio-advantages">
                <figure className="advantages-card">
                    <img src={clock} alt="clock" />
                    <figcaption>от <span className="highlighted-text">14</span> дней<br></br>выполнения заказа</figcaption>
                </figure>
                <figure className="advantages-card">
                    <img src={hands} alt="hands" />
                    <figcaption><span className="highlighted-text">100%</span><br></br> качественная ручная работа</figcaption>
                </figure>
                <figure className="advantages-card">
                    <img src={knitting} alt="knitting" />
                    <figcaption><span className="highlighted-text">5</span> летний<br></br>опыт роботы</figcaption>
                </figure>
            </div>
        </div>
    </div>)
}

export default Portfolio;