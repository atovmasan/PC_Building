import React from "react"
import t from "./Teach.css"
import Logo from "../../Photo/Teach"
import F from "../../Photo/1"
import S from "../../Photo/2"
import T from "../../Photo/3"





export const Teachers = () => {
    return (
        <div className="teachersContent">
          <div className="tTitle">
          <img width="150px" src={Logo} />
          <h1>Ваши преподаватели</h1>
          </div>
          <div className="tContainer">
          <div>
              <img width="200px" src={F} />
              <h3>Дмитрий Иванов</h3>
              <p>Специалист по видеокартам</p>
              <button>Биография</button>
          </div>

          <div>
              <img width="200px" src={S} />
              <h3>Дмитрий Иванов</h3>
              <p>Специалист по видеокартам</p>
              <button>Биография</button>
          </div>

          <div>
              <img width="200px" src={T} />
              <h3>Дмитрий Иванов</h3>
              <p>Специалист по видеокартам</p>
              <button>Биография</button>
          </div>
          </div>
        </div>
    )
}