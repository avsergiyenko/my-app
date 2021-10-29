import React from "react";
import snood1 from "../winter products/img/snoods/snood1.png";
import snood2 from "../winter products/img/snoods/snood2.png";
import snood3 from "../winter products/img/snoods/snood3.png";

function Snoods() {
    return(<div>
                <h2>СНУДЫ</h2>
                    <div className="product-images">
                        <img src={snood1} alt="snood" />
                        <img src={snood2} alt="snood" />
                        <img src={snood3} alt="snood" />
                    </div>
                    <div className="wool-products">
                        <button className="order-button">заказать</button>           
                    </div>
            </div>)
}

export default Snoods;