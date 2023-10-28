import React from 'react'
import "../cards/Cards.scss"
import sun from "../../img/sun.png"

const Cards = () => {
    return (
        <div className='container'>
            <div className="boxes">
                <div className="ola">
                    <div className="nameCard">
                        MY WEATHER
                    </div>
                <div className="card1">
                    <p>Location</p>
                    <input type="text" placeholder='Hamburg' className='olalaa' />
                    <div className="cardWeather">
                        <div className="photo">
                           <img src={sun} alt="" style={{width: '107px'}}/>
                        </div>
                        <div className="text">
                            <div className="number">
                                30
                            </div>
                            <div className="textW">
                                Sunshine
                            </div>
                            <div className="dateText">
                                Friday, ...
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="ola">
                    <div className="nameCard">
                        MY WEATHER
                    </div>
                <div className="card1">
                    <p>Location</p>
                    <input type="text" placeholder='Hamburg' className='olalaa' />
                    <div className="cardWeather">
                        <div className="photo">
                           <img src={sun} alt="" style={{width: '107px'}}/>
                        </div>
                        <div className="text">
                            <div className="number">
                                30
                            </div>
                            <div className="textW">
                                Sunshine
                            </div>
                            <div className="dateText">
                                Friday, ...
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="ola">
                    <div className="nameCard">
                        MY WEATHER
                    </div>
                <div className="card1">
                    <p>Location</p>
                    <input type="text" placeholder='Hamburg' className='olalaa' />
                    <div className="cardWeather">
                        <div className="photo">
                           <img src={sun} alt="" style={{width: '107px'}}/>
                        </div>
                        <div className="text">
                            <div className="number">
                                30
                            </div>
                            <div className="textW">
                                Sunshine
                            </div>
                            <div className="dateText">
                                Friday, ...
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="ola">
                    <div className="nameCard">
                        MY WEATHER
                    </div>
                <div className="card1">
                    <p>Location</p>
                    <input type="text" placeholder='Hamburg' className='olalaa' />
                    <div className="cardWeather">
                        <div className="photo">
                           <img src={sun} alt="" style={{width: '107px'}}/>
                        </div>
                        <div className="text">
                            <div className="number">
                                30
                            </div>
                            <div className="textW">
                                Sunshine
                            </div>
                            <div className="dateText">
                                Friday, ...
                            </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Cards
