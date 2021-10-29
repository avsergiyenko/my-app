import React from "react";
import summerSet1 from "../summer products/img/sets/summerSet1.png";
import summerSet2 from "../summer products/img/sets/summerSet2.png";
import summerSet3 from "../summer products/img/sets/summerSet3.png";


function SummerSets() {
    return(<div>
        <h2>ЛЕТНИЕ НАБОРЫ</h2>
        <div className="product-images">
            <img src={summerSet1} alt="Summer Set" />
            <img src={summerSet2} alt="Summer Set" />
            <img src={summerSet3} alt="Summer Set" />
        </div>
        <div className="wool-products">
            <button className="order-button">заказать</button>           
        </div>
    </div>)
}

export default SummerSets;