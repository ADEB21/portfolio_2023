import React from 'react'
import headerStyle from "./header.module.scss"
import Icons from "../../atoms/Icons"

const index = () => {
  return (
    <header className={headerStyle.ad_header}>
        <a href="/"><p className='bi-small-heading'>Arthur Debruille</p></a>
        <nav>
            <ul>
                <a href="/">
                    <li>Accueil</li>
                </a><a href="/about">
                    <li>A propos</li>
                </a><a href="/contact">
                    <li>Contact</li>
                </a>
            </ul>
        </nav>
    </header>
  )
}

export default index