import React from "react"
import PC from "../../Photo/PCVector"
import USB from "../../Photo/USB"
import Cabel from "../../Photo/Cabel"
import work from "./Work.css"



export const Work = () => {
    return (
        <div className="workContent">
            <h1>Получите профессию прямо сейчас</h1>
            <div className="workData">
            <div className="worksData"> 
                <img src={PC}/>
                <h2>Только практические навыки в работе</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget
                    velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi 
                    porttitor tempus. Placerat dui.
                </p>
            </div>
            <div className="worksData"> 
                <img src={USB}/>
                <h2>Работа на самом современном оборудовании</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget
                    velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi 
                    porttitor tempus. Placerat dui.
                </p>
            </div>
            <div className="worksData"> 
                <img src={Cabel}/>
                <h2>Сертификация по окончании обучения</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget
                    velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla mi 
                    porttitor tempus. Placerat dui.
                </p>
            </div>
            </div>
        </div>
    )
}