import React from 'react'
import ProcessSectionStyle from "./processSection.module.scss"
import TitleParagraph from "../../molecules/TitleParagraph/Index"

const Index = (props) => {
    const {subTitle} = props
  return (
    <section className={ProcessSectionStyle.ad_processSection}>
        <TitleParagraph title="Processus" subTitle={subTitle}/>
    </section>
  )
}

export default Index