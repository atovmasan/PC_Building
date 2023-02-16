import React from "react"
import StartM from "../../Photo/StartM"
import start from "./Start.css"
import PH from "../../Photo/StartPH"



export const Start = () => {
    return (
        <div className="startContent">
          <div className="startTop">
              <img src={StartM}/>
              <h1>Быстрый старт</h1> 
          </div>
          <p>Больше 90% учеников прошли полный курс и смогли <br></br> собрать свой первый компьютер</p>
          <img className="bottomIMG" width="1175px" src={PH} />
        </div>
    )
}