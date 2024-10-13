import React, { useEffect, useState } from 'react'
import './singlePage.css'
import { useParams } from 'react-router-dom'
import SinglePageSlider from './slider/SinglePageSlider'
import { hero } from '../../assets/dummyData'
import Side from '../home/sideContent/side/Side'

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    const item = hero.find((item) => item.id === parseInt(id))
    window.scrollTo(0, 0)
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      {
        item ? (
          <main>
            <SinglePageSlider />

            <div className="container">
              <section className="mainContent details">
                <h1 className="title">{item.title}</h1>

                <div className="author">
                  <span>by</span>
                  <img src={item.authorImg} alt="" />
                  <p>{item.authorName}</p>
                  <label htmlFor="">{item.time}</label>
                </div>

                <div className="social">
                  <div className="socBox">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                  
                  <div className="socBox">
                    <i className="fab fa-pinterest"></i>
                  </div>
                  
                  <div className="socBox">
                    <i className="fab fa-twitter"></i>
                  </div>
                  
                  <div className="socBox">
                    <i className="fab fa-instagram"></i>
                  </div>
                  
                  <div className="socBox">
                    <i className="fab fa-youtube"></i>
                  </div>
                </div>

                <div className="desctop">
                  {
                    item.desc.map((val, index) => {
                      return(
                        <>
                          <div key={index}>
                            <p>{val.para1}</p>
                            <p>{val.para2}</p>
                          </div>
                        </>
                      )
                    })
                  }
                </div>

                <img src={item.cover} alt="" />
                
                <div className="descbot">
                {
                    item.details.map((val, index) => {
                      return(
                        <>
                          <div key={index}>
                            <h1>{val.title}</h1>
                            <p>{val.para1}</p>
                          </div>
                        </>
                      )
                    })
                  }
                </div>

                <div className="quote">
                  <i className="fa fa-quote-left"></i>
                  {
                    item.details.map((val, index) => {
                      return(
                        <>
                          <div key={index}>
                            <p>{val.quote}</p>
                          </div>
                        </>
                      )
                    })
                  }
                </div>

                <div className="desctop">
                  {
                    item.details.map((val, index) => {
                      return(
                        <>
                          <div key={index}>
                            <p>{val.para2}</p>
                            <p>{val.para3}</p>
                          </div>
                        </>
                      )
                    })
                  }
                </div>
              </section>

              <section className="sideContent">
                <Side />
              </section>
            </div>
          </main>
        ) : (
          <h1>Not Found</h1>
        )
      }
    </>
  )
}

export default SinglePage