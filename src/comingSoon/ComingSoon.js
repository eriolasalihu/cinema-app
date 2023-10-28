import React from 'react'
import "../comingSoon/ComingSoon.scss"
import Header from '../header/Header'
import ola from "../../src/img/cinemaPic.avif"
const ComingSoon = () => {
    return (
        <>
            <div className='container'>
                <Header />
                <div className="row layoutCommingSoon">
                    <div className="col-md-8 textContainer ">
                        <h1 className=''>Spider Man: <br /> Far From Home</h1>
                        <h6>Coming Soon : Wednesday, June 3rd, 18:40</h6>
                        <div className="butonatComingSoon mt-4 mb-3">
                            <button className='watchTrailer'>
                                <i class="fa-solid fa-play " style={{ color: '#ffffff' }}></i>  {" "} Watch Trailer
                            </button>
                            <button className='wishList'>
                                <i class="fa-solid fa-plus" style={{ color: '#ff0047' }}></i>  Add List</button>
                        </div>

                        <div className="olalaaaaaaaaaaaaaaaaa ">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="category">
                                        <h5>CATEGORY</h5>
                                        <p>Fantastic, Sci-Fi</p>
                                    </div>
                                    <div className="writer mb-2">
                                        <h5>DIRECTOR / WRITER</h5>
                                        <p>Director: Jon Watts</p>
                                        <p>Writers: Steve Ditko, Stan Lee, Chris McKenna</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="storyLine">
                                        <h5>STORYLINE</h5>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit
                                            . Debitis eos vero fugit cum provident soluta alias harum,
                                            deserunt odit, iste repellat molestias eaque i</p>
                                    </div>
                                    <div className="stars">
                                        <h5>STARS</h5>
                                        <p>lrem ipsum, dolor sit amet consectetur adipisicing elit
                                            . Debitis eos vero fugit cum provident soluta alias</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 filmsComingSoon mb-3">
                        <div className="comingSoon">
                            <div className="title">
                                <i class="fa-solid fa-square mt-1" style={{ color: '#ff2253' }}></i>
                                <h3>Men in black</h3>
                            </div>
                            <div className="textComingSoon">
                                <h6>Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Quaerat, aspernatur numquam sit facilis exercitationem </h6>
                            </div>
                        </div>

                        <div className="comingSoon">
                            <div className="title">
                                <i class="fa-solid fa-square mt-1" style={{ color: '#ff2253' }}></i>
                                <h3>Men in black</h3>
                            </div>
                            <div className="textComingSoon">
                                <h6>Lorem ipsum dolor sit, amet consectetur adipisicing
                                    elit. Quaerat, aspernatur numquam sit facilis exercitationem </h6>
                            </div>
                        </div>
                        <div className="trailerMovies">
                            <div className="borderImg">
                                <img className='trailerImgMovies' src={ola} alt="" />
                                <div className="titleMovie">
                                    Men in Black : International
                                </div>
                                <div className="dateMovie">
                                    18 June 2019
                                </div>
                                <div className="playButton">
                                    <i class="fa-regular fa-circle-play" style={{ color: '#ffffff' }}></i>

                                </div>
                            </div>
                            {/* <div className="borderImg">
                                <img className='trailerImgMovies' src={ola} alt="" />
                                <div className="titleMovie">
                                    Men in Black : International
                                </div>
                                <div className="dateMovie">
                                    18 June 2019
                                </div>
                                <div className="playButton">
                                    <i class="fa-regular fa-circle-play" style={{ color: '#ffffff' }}></i>

                                </div>
                            </div>
                            <div className="borderImg">
                                <img className='trailerImgMovies' src={ola} alt="" />
                                <div className="titleMovie">
                                    Men in Black : International
                                </div>
                                <div className="dateMovie">
                                    18 June 2019
                                </div>
                                <div className="playButton">
                                    <i class="fa-regular fa-circle-play" style={{ color: '#ffffff' }}></i>

                                </div>
                            </div> */}
                            <div className="borderImg">
                                <img className='trailerImgMovies' src={ola} alt="" />
                                <div className="titleMovie">
                                    Men in Black : International
                                </div>
                                <div className="dateMovie">
                                    18 June 2019
                                </div>
                                <div className="playButton">
                                    <i class="fa-regular fa-circle-play" style={{ color: '#ffffff' }}></i>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default ComingSoon
