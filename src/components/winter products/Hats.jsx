import React from "react";
import winterHat from "../winter products/img/hats/winter-hat.png";
import winterHat1 from "../winter products/img/hats/winter-hat1.png";
import winterHat2 from "../winter products/img/hats/winter-hat2.png";

function Hats() {
    return (<div>
                <h2>ГОЛОВНЫЕ УБОРЫ</h2>
                <div className="product-images">
                    <img src={winterHat} alt="winter-hat" />
                    <img src={winterHat1} alt="winter-hat" />
                    <img src={winterHat2} alt="winter-hat" />
                </div>
                <div className="wool-products">
                    <button className="order-button">заказать</button>           
                </div>
            </div>)    
}

export default Hats;
            