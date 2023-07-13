import React from 'react'
import FooterStyle from "./footer.module.scss"
import Icons from "../../atoms/Icons"

const Index = () => {
  return (
    <footer className={FooterStyle.ad_footer}>
        <p className="ad-small-heading">Arthur Debruille</p>
        <nav>
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="">A propos</a></li>
                <li><a href="">Contact</a></li>
                <li><Icons white={true} type="linkedin"/></li>
                <li><Icons white={true} type="twitter"/></li>
            </ul>
        </nav>
    </footer>
  )
}

export default Index