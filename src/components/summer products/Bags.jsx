import React from "react";
import bag1 from "../summer products/img/bags/bag1.png";
import bag2 from "../summer products/img/bags/bag2.png";
import bag3 from "../summer products/img/bags/bag3.png";

function Bags() {
    return(<div>
        <h2>СУМКИ</h2>
        <div className="product-images">
            <img src={bag1} alt="bag" />
            <img src={bag2} alt="bag" />
            <img src={bag3} alt="bag" />
        </div>
        <div className="wool-products">
            <button className="order-button">заказать</button>           
        </div>
    </div>)
}

export default Bags;