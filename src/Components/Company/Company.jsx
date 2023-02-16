import React from "react"
import Logo from "../../Photo/CompanyLogo"
import MSI from "../../Photo/MSI"
import company from "./Company.css"



export const Company = () => {
    return (
        <div className="companyContent">
            <div className="companyH1">
          <img width="100px" src={Logo} />
          <h1>Партнеры - топовые бренды</h1>
          </div>
          <div className="comItems">          
              <img width="175px" src={MSI} />
              <img width="175px" src={MSI} />
              <img width="175px" src={MSI} />
              <img width="175px" src={MSI} />
              <img width="175px" src={MSI} />
              <img width="175px" src={MSI} />
              <img width="175px" src={MSI} />
              <img width="175px" src={MSI} />
          </div>
        </div>
    )
}