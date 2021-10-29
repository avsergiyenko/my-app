import React from "react";
import plus from "../icons/plus.svg";

function FAQ () {
    return(<div className="wrapper">
        <h2>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ:</h2>
        <div className="faq container">            
            <div className="faq_block">
                <div className="faq_icons">
                    <img alt="" src={plus} />
                </div> 
                <div className="faq_text">
                    <h3 className="faq_title">Какой срок выполнения заказа?</h3>
                    <div className="faq_subtitle">от 1 недели до 1 месяца,  взависимости какая очередь и от пика сезона</div>
                </div>
            </div>
            <div className="faq_block">
                <div className="faq_icons">
                    <img alt="" src={plus} />
                </div> 
                <div className="faq_text">
                    <h3 className="faq_title">Если мне не понравиться или не подойдет размер?</h3>
                    <div className="faq_subtitle">Бывают не попадания в размер - перевязываем. Исправляем косяки по нашей вине.</div>
                </div>
            </div>
            <div className="faq_block">
                <div className="faq_icons">
                    <img alt="" src={plus} />
                </div> 
                <div className="faq_text">
                    <h3 className="faq_title">Как упаковываете шляпки перед отправкой почтой?</h3>
                    <div className="faq_subtitle">от 1 недели до 1 месяца,  взависимости какая очередь и от пика сезона</div>
                </div>
            </div>
            <div className="faq_block">
                <div className="faq_icons">
                    <img alt="" src={plus} />
                </div> 
                <div className="faq_text">
                    <h3 className="faq_title">Как распушить ангоровую шапку?</h3>
                    <div className="faq_subtitle">от 1 недели до 1 месяца,  взависимости какая очередь и от пика сезона</div>
                </div>
            </div>
            <div className="faq_block">
                <div className="faq_icons">
                    <img alt="" src={plus} />
                </div> 
                <div className="faq_text">
                    <h3 className="faq_title">Есть ли скидка при заказе сразу трех товаров?</h3>
                    <div className="faq_subtitle">от 1 недели до 1 месяца,  взависимости какая очередь и от пика сезона</div>
                </div>
            </div>                    
        </div>
    </div>)
}

export default FAQ;