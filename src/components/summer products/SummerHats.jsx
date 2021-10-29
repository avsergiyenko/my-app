import React from "react";
import summerHat1 from "../summer products/img/hats/summerHat1.png";
import summerHat2 from "../summer products/img/hats/summerHat2.png";
import summerHat3 from "../summer products/img/hats/summerHat3.png";

function SummerHats() {
    return(<div>
                <h2>ГОЛОВНЫЕ УБОРЫ</h2>
                <div className="product-images">
                    <img src={summerHat1} alt="summer-hat" />
                    <img src={summerHat2} alt="summer-hat" />
                    <img src={summerHat3} alt="summer-hat" />
                </div>
                <div className="wool-products">
                    <button className="order-button">заказать</button>           
                </div>
            </div>)
}

export default SummerHats;