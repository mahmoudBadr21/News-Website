import React from 'react'
import Heading from '../../../common/heading/Heading'
import SocialMedia from '../social/SocialMedia'
import './side.css'
import Slider from "react-slick"
import sideBanner from "../../../../../public/images/sidebar-banner-new.jpg"
import Tpost from '../Tpost/Tpost'
import { catgeory, gallery } from '../../../../assets/dummyData'

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Heading title="Stay Connected" />
      <SocialMedia />
      
      <Heading title="Subscribe" />
      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stiries</h1>
        <form action="">
          <input type="text" placeholder='Email Address ...' />
          <button>
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button>
        </form>
      </section>

      <section className="banner">
        <img src={sideBanner} alt="" />
      </section>

      <Tpost />

      <section className="catgeorys">
        <Heading title="Catgeorys" />
        {
          catgeory.map((val, index) => {
            return (
              <div className="catgeory catgeory1" key={index}>
                <span>{val}</span>
              </div>
            )
          })
        }
      </section>

      <section className="gallery">
        <Heading title="Gallery" />

        <Slider>
          {
            gallery.map((val, index) => {
              return (
                <div className="img" key={index}>
                  <img src={val.cover} alt="" />
                </div>
              )
            })
          }
        </Slider>
      </section>
    </>
  )
}

export default Side