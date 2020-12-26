import React from "react"
import "./style.scss"
import CallToAction from "../HeroSection/CallToAction"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  data: {
    description: string
    image: string
  }[]
}
export default function BulletListSection(props: Props) {
  return (
    <div className="bullet-list-section column-layout">
        {props.data.map(item => (
          <div className="bullet-list-section--tile">
          <div className="bullet-list-section--tile--illustration" />
            <div className="bullet-list-section--tile--description" dangerouslySetInnerHTML={{ __html: item.description }} />
          </div>
        ))}
    </div>
  )
}
