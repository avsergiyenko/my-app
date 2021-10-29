import React from "react";
import top1 from "../summer products/img/tops/top1.png";
import top2 from "../summer products/img/tops/top2.png";
import top3 from "../summer products/img/tops/top3.png";

function Tops() {
    return(<div>
        <h2>ТОПЫ и МАЙКИ</h2>
        <div className="product-images">
            <img src={top1} alt="top" />
            <img src={top2} alt="top" />
            <img src={top3} alt="top" />
        </div>
        <div className="wool-products">
            <button className="order-button">заказать</button>           
        </div>
    </div>)
}

export default Tops;