import React from "react"
import "./style.scss"
import ioakWhite from "../../assets/ioak_white.svg"
import fortunaWhite from "../../assets/fortuna_white.svg"

interface Props {
  data: {
    title: string
    description: string
  }
}

export default function CompanyProfile(props: Props) {
  return (
    <div className="company-profile">
      <div className="company-profile--logo">
        <img
          className="company-profile--logo--oneauth"
          src={fortunaWhite}
          alt="IOAK logo"
        />
        by
        <img
          className="company-profile--logo--ioak"
          src={ioakWhite}
          alt="IOAK logo"
        />
      </div>
      <p>{props.data.description}</p>
    </div>
  )
}
