import React from "react";

function Reviews() {
    return(<div className="wrapper">
        <div className="reviews container">
            <h2>ОТЗЫВЫ О РАБОТЕ</h2>
            <div className="reviews__section">
                <p>
                    Доброе утро, Яна.Вчера получила от вас посылку. Не могу наглядеться, какое все красивое. Плед - произведения искусства.
                    И шапочки маленькие в тон пледа. Костюм беленький прекрасный, как раз на середину апреля - мая будет отлично.
                    И шапочку (цвет ) Вы подобралли идеально. Помпон шикарный. Спасибо еще раз за ваш труд, и мои просьбы, связанные с другими магазинами.
                    Обращусь к Вам в середине лета.
                </p>
            </div>
            <div className="reviews__slider">
                <div className="slider-buttons">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className="wool-products">
                <a href="https://www.instagram.com/duende_quality">больше отзывов в instagram...</a>
                <button className="order-button">написать свой  отзыв</button>                           
            </div>
        </div>
    </div>)
}

export default Reviews;