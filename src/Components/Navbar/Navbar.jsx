import React from "react"
import navbar from "./Navbar.css"
import logo from "../../Photo/Logo"


export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="top">
                  <img src={logo}/>
                  <div className="txt">
                    <p>Главная</p>
                    <p>Курсы</p>
                    <p>Расписание</p>
                    <p>Преподаватели</p>
                    <p>Рассылка</p>
                    <p>Контакты</p>
                  </div>
                  <button>Зайти в кабинет</button>
            </div>
            <div className="middle">
                 <h1> Первый курс <br></br> по компьютерной сборке </h1>
              <div className="middleTIME">
              <div className="time">
                  <h2>18</h2>
                  <p>Дней</p>
              </div>
              <div className="time">
                  <h2>18</h2>
                  <p>Часов</p>
              </div>
              <div className="time">
                  <h2>18</h2>
                  <p>Минут</p>
              </div>
              <div className="time">
                  <h2>18</h2>
                  <p>Секунд</p>
              </div>
              </div>
            </div>
            <div className="bottom">
                <button>Заказать курс</button>
                <div className="itemsStore">
                <div className="item">
                    <p className="data">Учеников всего:</p>  <p>200</p>
                </div>
                <div className="item">
                    <p className="data">Успешно закончили курс:</p>  <p>190</p>
                </div>
                </div> 
            </div>
        </div>
    )
}