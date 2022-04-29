import React from "react"
import "./style.scss"
import fortunaWhite from "../../assets/fortuna_white.svg"
import fortunaBlack from "../../assets/fortuna_black.svg"
import { Link } from "gatsby"

interface Props {
  black?: boolean
}

export default function HeaderSection(props: Props) {
  return (
    <div className="header-section">
      <Link to="/" title="Go to landing page">
        <img
          className="logo"
          src={props.black ? fortunaBlack : fortunaWhite}
          alt="Fortuna logo"
        />
      </Link>
    </div>
  )
}
