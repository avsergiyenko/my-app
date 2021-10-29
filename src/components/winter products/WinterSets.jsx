import React from "react";
import winterSet1 from "../winter products/img/winter sets/winterSet1.png";
import winterSet2 from "../winter products/img/winter sets/winterSet2.png";
import winterSet3 from "../winter products/img/winter sets/winterSet3.png";

function WinterSets() {
    return(<div>
                <h2>ЗИМНИЕ НАБОРЫ</h2>
                <div className="product-images">
                    <img src={winterSet1} alt="Winter Set" />
                    <img src={winterSet2} alt="Winter Set" />
                    <img src={winterSet3} alt="Winter Set" />
                </div>
                <div className="wool-products">
                    <button className="order-button">заказать</button>           
                </div>
            </div>)
}

export default WinterSets;