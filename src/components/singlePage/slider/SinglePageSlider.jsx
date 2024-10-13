import React from 'react'
import './style.css'
import { popular } from '../../../assets/dummyData'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SinglePageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <section className="singlePopular">
        <Slider {...settings}>
          {popular.map((val) => {
            return (
              <>
                <div className="items">
                  <div className="box">

                    <div className="images">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                    </div>

                    <div className="text">
                      <h1 className="title">
                        {val.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default SinglePageSlider