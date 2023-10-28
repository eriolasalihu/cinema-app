import React from 'react'
import "../landingPage/LandingPage.scss"
import Header from '../header/Header'
import Cards from '../anotherPage/cards/Cards'
import Landingg from '../landingPagePage/Landingg'
const LandingPage = () => {
  return (
    <div className='container'>
      <Header/>
      <div className="pageLayout">
        <div className="row mt-5 pageLayout">
            <div className="col-sm-9">
                <div className="textMovie">
              <h1>
                MOVIE <br/>
                CHANGE <br/>
                THE WORLD <br/>
                </h1>
                </div>
            </div>
            <div className="col-sm-3 mt-5">
                <div className="boxesMovie">
                    <div className="movieChoice">
                        <h1>250+</h1>
                        <p>Movie Choice</p>
                    </div>
                    <div className="movieChoices">
                    <i class="fa-solid fa-film fa-2xl"></i>
                        <p>BestMovie</p>
                    </div>
                    <div className="movieChoice">
                        <h1>150+</h1>
                        <p>Series Choice</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Landingg/>
    </div>
  )
}

export default LandingPage
