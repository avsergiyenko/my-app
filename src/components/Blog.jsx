import React from "react";
import measuring from "../components/blog/mittens_measuring.png";
import knit_hat from "../components/blog/knit_hat.png";

function Blog() {
    return (<div className="wrapper">
        <div className="section-title">БЛОГ. ПОЛЕЗНЫЕ СТАТЬИ</div>
        <div className="blog__background">             
            <div className="blog container">
                <div className="outer_container">
                    <div className="inner_container">
                        <img src={measuring} alt="mitting measuring" />
                        <h3>Как снять мерки для варежек</h3>
                        <p>Мерка 1: окружность кисти ( измеряют самую широкую часть по косточкам, туго натягивая сантиметровую ленту )</p>
                        <p>Мерка 2: длина кисти от запястья ( где складочка) до конца среднего пальца.</p>
                        <p>Мерка 3: длина кисти от запястья до конца мизинца.</p>
                        <p>Мерка 4: длина кисти от запястья до основания большого</p>
                        <a href="#blog">читать далее...</a>
                    </div>
                    <div className="inner_container">
                        <img src={knit_hat} alt="how to knit a hat" />
                        <h3>Вяжем берет. Бесплатное описание.</h3>
                        <p>
                            Размер ОГ 55-57 см (взрослый).<br></br>
                            Для вязания такого берета вам понадобится:
                        </p>
                        <p>- пряжа Норка (350м/50гр), вязать будем в 4 основные нити (без доп.нитей!).</p>
                        <p>- спицы #4 для резинки, #5.5 для основного узора</p>
                        <p>- игла с широким ушком, чтобы спрятать кончики.</p>
                        <p>- маркер для вязания.</p>
                        <a href="#blog">читать далее...</a>
                    </div>
                </div>                
            </div>            
        </div>
        <div className="blog__slider">
                    <div className="slider-buttons">
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
        </div>       
    </div>)
}

export default Blog;