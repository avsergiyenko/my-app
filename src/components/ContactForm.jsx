import React from "react";

function ContactForm() {
    return(<div className="wrapper">
        <div className="contact container">
            <div className="contact_title">
                ОСТАЛИСЬ ВОПРОСЫ?<br></br>
                ОСТАВЬТЕ  ЗАЯВКУ МЫ С ВАМИ СВЯЖЕМСЯ
                И ВСЕ ПОДРОБНО РАССКАЖЕМ
            </div>
            <div className="contact_field">
                <input className="phone" type="tel" inputmode="text" size="15" placeholder="+38(0__)___ __ __"/>
                <button className="contact-button">свяжитесь со мной</button>
            </div>  
        </div>
    </div>)
}

export default ContactForm;