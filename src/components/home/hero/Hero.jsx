import React, { useState } from 'react'
import { hero } from '../../../assets/dummyData'
import Card from './Card'
import "./hero.css"

const Hero = () => {

  const [items, setItems] = useState(hero)

  return (
    <>
      <section className="hero">
        <div className="container">
          {items.map((item, index) => {
            return(
              <>
                <Card key={index} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero