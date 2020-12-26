import React from "react"
import "./style.scss"
import OakButton from "../oakfly/OakButton"
import content from "../../assets/content/HeroSection.json"
import HeaderSection from "../HeaderSection"
import CallToAction from "./CallToAction"
import OakAnimateElement from "../oakfly/OakAnimateElement"

interface Props {
  data: {
    title: string
    subtitle: string
    image: string
    callToAction: {
      label: string
      faIcon: string
    }
  }
}
export default function HeroContent(props: Props) {
  return (
    <div className="hero-content">
      <OakAnimateElement direction="up">
      <div className="hero-content--main">
        <h1
          className="heading--1 hero-content--title"
          dangerouslySetInnerHTML={{ __html: props.data.title }}
        />
        <div className="hero-content--subtitle"
          dangerouslySetInnerHTML={{ __html: props.data.subtitle }}
        />
        <div className="hero-content--cta">
          <CallToAction data={props.data.callToAction} theme="primary" />
        </div>
      </div>
      </OakAnimateElement>
      {/* <OakAnimateElement direction="left">
        <div className="hero-content--illustration">
            <img src={require(`../../assets/${props.data.image}`)} />
          </div>
      </OakAnimateElement> */}
    </div>
  )
}
