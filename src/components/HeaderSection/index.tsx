import React from "react"
import "./style.scss"
import expensoWhite from "../../assets/expenso_white.svg"
import expensoBlack from "../../assets/expenso_black.svg"
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
          src={props.black ? expensoBlack : expensoWhite}
          alt="Expenso logo"
        />
      </Link>
    </div>
  )
}
