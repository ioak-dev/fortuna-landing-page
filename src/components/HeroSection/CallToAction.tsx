import React from "react"
import "./CallToAction.scss"
import OakButton from "../oakfly/OakButton"

interface Props {
  theme?: "primary" | "default"
  data: {
    label: string
    faIcon: string
  }
}
export default function CallToAction(props: Props) {
  return (
    <div className="call-to-action">
      <OakButton
        action={() => (window.location.href = "https://fortuna-app.ioak.io")}
        theme={props.theme || "primary"}
        variant="regular"
      >
        {props.data.label}
      </OakButton>
    </div>
  )
}
