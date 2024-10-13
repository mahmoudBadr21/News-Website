import React from 'react'
import Heading from '../../common/heading/Heading'
import './discover.css'
import { discover } from '../../../assets/dummyData'

const Discover = () => {
  return (
    <>
      <section className="discover">
        <div className="container">
        <Heading title="Discover" />
        
        <div className="content">
          {
            discover.map((val, index) => {
              return (
                <div className="box" key={index}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <h1 className="title">{val.title}</h1>
                </div>
              )
            })
          }
        </div>
        </div>
      </section>
    </>
  )
}

export default Discover