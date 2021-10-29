import React from "react";
import SummerHats from "./summer products/SummerHats";
import Bags from "./summer products/Bags";
import Tops from "./summer products/Tops";
import SummerSets from "./summer products/SummerSets";

function SummerCollection() {
    return(<div className="wrapper">
                <div className="section-header">ЛЕТНЯЯ КОЛЛЕКЦИЯ</div>
                <div className="summer container">            
                    <p>
                        За что женщины любят лето? За то, что оно дает возможность носить самую разнообразную одежду!
                        Широкополые шляпы, панамы, шляпы «Одри» и «Федоры» из рафии – главный тренд лета. 
                        Они<br></br>не только незаменимы в курортном гардеробе, но и могут быть использованы в повседневных городских образах.<br></br>
                        Также неотъемлемым атрибутом летнего гардероба современной женщины являются сумки, вязанные крючком. 
                        Этот аксессуар отлично подходит для использования во время похода на пляж или как дополнение к легким сарафанам и платьям. 
                        Те, кто проводит лето в городе, также не отказываются от вязаных сумок, ведь разнообразие их видов и моделей позволяет дополнить любой образ.
                    </p>
                    <SummerHats />
                    <Bags />
                    <Tops />
                    <SummerSets />
                </div>
            </div>)
}

export default SummerCollection;