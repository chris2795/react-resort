import React from 'react'

export default function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

//for Default the .defaultHero
Hero.defaultProps = {
    hero: "defaultHero"
};