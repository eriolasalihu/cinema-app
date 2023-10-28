import React from 'react'
import "../../src/SinglePageFilm/SinglePageFilm.scss"
import ola from "../img/cinemaPic.avif"
import Header from '../header/Header'

const SinglePageFilm = () => {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="imgBorder">
                        <img src={ola} alt="" style={{ width: '100%', height: '450px' }} />
                        </div>
                    </div>
                    <div className="col-md-8 ">
                        <div className="title">
                            <h3>Barbie movie</h3>
                        </div>
                        <div className="dateAndHour">
                            <p>2013</p>
                            <p>1hr 44min</p>
                        </div>
                        <div className="description mt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quae, vitae. Harum commodi corrupti perspiciatis quo quas,
                                dignissimos doloribus magni laboriosam nam suscipit
                                unde minus. Rerum sunt tenetur quos odit pariatur!</p>
                        </div>
                        <div className="row descrow">
                            <div className="col-2">
                                <h6>Director:</h6>
                                <h6>Cast:</h6>
                                <h6>Director:</h6>

                            </div>
                            <div className="col-10">
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                <h6>Quae, vitae. Harum commodi corrupti perspiciatis quo </h6>
                                <h6>unde minus. Rerum sunt tenetur quos odit paria</h6>

                            </div>
                        </div>
                        <div className="row d-flex gap-4 mt-5 ms-1 mb-5">
                            <div className="col-2 boxesFilms">
                                {/* <i class="fa-regular fa-bookmark fa-xl mt-4 bookmarkButton"></i> */}
                                <i class="fa-solid fa-play fa-xl mt-4" style={{color: '#930606'}}></i>
                                <h6>Play</h6>
                            </div>
                            <div className="col-2 boxesFilms">
                                <i class="fa-regular fa-star fa-xl mt-4 bookmarkButton" style={{color: '#bfbf10'}}></i>
                                <h6>Range</h6>
                            </div>
                            <div className="col-2 boxesFilms">
                            <i class="fa-solid fa-trailer fa-xl mt-4 bookmarkButton" style={{color: 'rgb(68 127 78)'}}></i>
                                <h6>Trailer</h6>
                            </div>
                            <div className="col-2 boxesFilms">
                                <i class="fa-regular fa-bookmark fa-xl mt-4 bookmarkButton" style={{color: 'grey'}}></i>
                                <h6>Favourite</h6>
                            </div>
                         
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SinglePageFilm
