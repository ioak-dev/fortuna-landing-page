import React from "react"
import "./style.scss"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  data: {
    title: string
    description: string
    image: any
    alt?: boolean
  }
}

export default function SectionTile(props: Props) {
  return (
    <div className="feature-sectiontile">
      {!props.data.alt && (
        <div className="feature-sectiontile--illustration-wrapper desktop-only">
          <OakAnimateElement direction="right">
            <div className="feature-sectiontile--illustration">
              <img src={require(`../../assets/${props.data.image}`)} />
            </div>
          </OakAnimateElement>
        </div>
      )}
      <div className=" desktop-only">
          <div className="feature-sectiontile--content">
            <h2 className="feature-sectiontile--content--title heading--2">{props.data.title}</h2>
            <p className="feature-sectiontile--content--description">{props.data.description}</p>
          </div>
      </div>
      <div className=" mobile-only">
          <div className="feature-sectiontile--content">
            <h2 className="feature-sectiontile--content--title heading--2">{props.data.title}</h2>
            <p className="feature-sectiontile--content--description">{props.data.description}</p>
          </div>
      </div>

<div className="feature-sectiontile--illustration-wrapper mobile-only">
  <OakAnimateElement direction="right">
    <div className="feature-sectiontile--illustration">
      <img src={require(`../../assets/${props.data.image}`)} />
    </div>
  </OakAnimateElement>
</div>
      {props.data.alt && (
        <div className="feature-sectiontile--illustration-wrapper desktop-only">
          <OakAnimateElement direction="left">
          <div className="feature-sectiontile--illustration--container">
            <div className="feature-sectiontile--illustration invert-shadow">
              <img src={require(`../../assets/${props.data.image}`)} />
            </div>
            </div>
          </OakAnimateElement>
        </div>
      )}
    </div>
  )
}
