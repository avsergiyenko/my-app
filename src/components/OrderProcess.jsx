import React from "react";
import group94 from "../components/OrderProcess/Group 94.svg";
import group96 from "../components/OrderProcess/Group 96.svg";
import group97 from "../components/OrderProcess/Group 97.svg";
import group98 from "../components/OrderProcess/Group 98.png";
import group99 from "../components/OrderProcess/Group 99.svg";
import group107 from "../components/OrderProcess/Group 107.svg";
import longArrow from "../components/OrderProcess/long_arrow.svg";

function OrderProcess() {
    return (<div className="wrapper">
        <div className="orderProcess container">
            <div className="upperContainer">
                <img src={group107} alt="" />
                <img className="longArrow1" src={longArrow} alt="" />
                <img src={group96} alt="" />
                <img className="longArrow2" src={longArrow} alt="" />
                <img src={group97} alt="" />                
                <h3>ПРОЦЕСС ЗАКАЗА</h3>   
            </div>
            <div className="lowerContainer">
                <img className="firstImg" src={group94} alt="" />
                <img className="longArrow3" src={longArrow} alt="" />           
                <img src={group99} alt="" />
                <img className="longArrow4" src={longArrow} alt="" />
                <div className="box">
                    <img className="longArrow5" src={longArrow} alt="" />
                    <img src={group98} alt="" />                    
                </div>
            </div>            
        </div>
    </div>)
}

export default OrderProcess;