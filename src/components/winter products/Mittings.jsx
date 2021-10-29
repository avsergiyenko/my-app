import React from "react";
import mitting1 from "../winter products/img/mittings/mitting1.png";
import mitting2 from "../winter products/img/mittings/mitting2.png"
import mitting3 from "../winter products/img/mittings/mitting3.png"

function Mittings() {
    return(<div>
                <h2>ВАРЕЖКИ. МИТЕНКИ</h2>
                    <div className="product-images">
                        <img src={mitting1} alt="mitting" />
                        <img src={mitting2} alt="mitting" />
                        <img src={mitting3} alt="mitting" />
                    </div>
                    <div className="wool-products">
                        <button className="order-button">заказать</button>           
                    </div>
            </div>)
}

export default Mittings;