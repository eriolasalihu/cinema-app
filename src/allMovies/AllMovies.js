import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import "../allMovies/AllMovies.scss"
import Movie1 from "../img/cinemaPic.avif"
import Movie2 from "../img/photo1.jpg"
import Movie4 from "../img/photo3.jpg"
import Popcorn from "../img/pngfind.com-popcorn-png-585072.png"
import Header from '../header/Header'
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Card from "../../src/carosueeel/card";
import Carousel from "../../src/carosueeel/carousel";
// import { Modal } from "bootstrap";

import Modal from 'react-modal';
const customStyles = {
    content: {
        background: '#ffffffb8',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



const AllMovies = () => {
    const [movies, setMovies] = useState();
    const navigate = useNavigate();
    const navigateToContacts = () => {
        navigate('/comingSoon');
    };
    const navigateToTrending = () => {
        navigate('/trending');
    };
    const navigateToSaved = () => {
        navigate('/saved');
    };

    const getMoviesData = () => {
        axios
            .get("https://www.omdbapi.com/?apikey=4255d08e&s=Dragon")
            .then((data) => {
                setMovies(data?.data?.Search);
                console.log("test", data?.data);

            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getMoviesData();
    }, []);
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    let cards = [
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://cdn.wallpapersafari.com/46/58/BSR8qf.jpg" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://www.xtrafondos.com/en/descargar.php?id=4927&resolucion=3840x2160" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmVGjxeI9cPVWz0yh2F-p830WSKDbm_hEyT1Pq41Nb6mvgSUhnYFFyTUY_0VJ7tC1X7Y&usqp=CAU" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
            )
        },
        {
            key: uuidv4(),
            content: (
                <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
            )
        }
    ];
    return (
        <>





            <div>

                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Payment Success</h2>

                    <div className="popCornImg d-flex justify-content-center">
                        <img className='popcornImg' src={Popcorn} alt="" style={{ width: "130px" }} />
                    </div>
                    <div className="popCornImg d-flex justify-content-center">
                        <h5>Ticket Booked Successfully !</h5>
                    </div>
                    <p>Congratulations! your ticket has been booked succesfully, this page will redirect to the ticket page</p>
                    <div className="popCornImg d-flex justify-content-end">
                        <button onClick={closeModal}>X</button>
                    </div>

                </Modal>
            </div>

            <div className='container'>
                <Header />
                <div className="row mb-5 pageLayout">
                    <div className="col-sm-7">
                        <div className="slider">
                            <img src={Movie1} alt="" />
                            <div className="watch">
                                <button> Watch the trailer </button>
                            </div>
                        </div>
                        <div className=" mt-3 allFilms ">
                            {movies?.map((el) => (
                                <div className="col-md-3 col-12 films mb-2">
                                    <div className="imageOfFilm">
                                        <img className='barbier' src={el?.Poster} alt="" />
                                    </div>
                                    <div className="nameOfFilm">
                                        <h6>{el?.Title}</h6>
                                    </div>
                                    <div className="desc">
                                        <h6>{el?.Year}</h6>
                                    </div>
                                    <div className="iconStar m-1 ">
                                        <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                        <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                        <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                        <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                        <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                    </div>
                                </div>
                            ))
                            }
                            {/* <div className="col-md-3 col-6 films mb-2">
                                <div className="imageOfFilm">
                                    <img className='barbier' src={Movie6} alt="" />
                                </div>
                                <div className="nameOfFilm">
                                    <h6>Barbie</h6>
                                </div>
                                <div className="desc">
                                    <h6>Barbie and Ken</h6>
                                </div>
                                <div className="iconStar m-1 ">
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 films mb-2">
                                <div className="imageOfFilm" draggable="true">

                                    <img className='barbier' src={Movie4} alt="" />
                                </div>
                                <div className="nameOfFilm">
                                    <h6>Barbie</h6>
                                </div>
                                <div className="desc">
                                    <h6>Barbie and Ken</h6>
                                </div>
                                <div className="iconStar m-1 ">
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 films mb-2">
                                <div className="imageOfFilm">
                                    <img className='barbier' src={Movie5} alt="" />
                                </div>
                                <div className="nameOfFilm">
                                    <h6>Barbie</h6>
                                </div>
                                <div className="desc">
                                    <h6>Barbie and Ken</h6>
                                </div>
                                <div className="iconStar m-1 ">
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                    <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                </div>
                            </div> */}
                            {/* <div className="col-md-3 col-6 films mb-2">
                            <div className="imageOfFilm">
                                <img className='barbier' src={Movie7} alt="" />
                            </div>
                            <div className="nameOfFilm">
                                <h6>Barbie</h6>
                            </div>
                            <div className="desc">
                                <h6>Barbie and Ken</h6>
                            </div>
                            <div className="iconStar m-1 ">
                                <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                                <i class="fa fa-star" style={{ color: '#cdf22c' }}></i>
                            </div>
                        </div> */}
                        </div>
                        <div className="row mt-3 mb-5 d-flex popcorn">
                            <div className="col-sm-6  d-flex popcornBox">
                                <div className="popCornImg mt-3">
                                    <img className='popcornImg' src={Popcorn} alt="" />
                                </div>
                                <div className="OrderPopcorn">
                                    <div className="textPopcorn">
                                        <h5>Popcorn <br /> & Cola</h5>
                                        <p>Salt medium</p>
                                        {/* <p className='emojiCode'>&#128527;</p> */}
                                    </div>
                                    <div className="order mt-4">
                                        <div className="money">
                                            $10
                                        </div>
                                        <div className="orderIt">
                                            <button>Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 d-flex popcornBox">
                                <div className="popCornImg mt-3">
                                    <img className='popcornImg' src={Popcorn} alt="" />
                                </div>
                                <div className="OrderPopcorn">
                                    <div className="textPopcorn">
                                        <h5>Popcorn <br /> & Cola</h5>
                                        <p>Salt medium</p>
                                        {/* <p className='emojiCode'>&#128526;</p> */}
                                    </div>
                                    <div className="order mt-4">
                                        <div className="money">
                                            $10
                                        </div>
                                        <div className="orderIt">
                                            <button>Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-sm-4 ola ">
                        <div className="layoutTicket">
                            <div className="ticketsLayout">
                                <div className="headingTitle">
                                    Barbie: Barbie Song
                                    <p>14 sessions</p>
                                </div>
                                <div className="calendar">
                                    <div className="iconDate mt-1">
                                        <i class="fa-solid fa-calendar styleIcon"></i>
                                    </div>
                                    <div className="dateNumber">
                                        10:30
                                        <br />
                                        <p>21Mars</p>
                                    </div>
                                </div>
                            </div>
                            <div className="borderLine mt-5">
                            </div>
                            <div className="places mt-5">
                                <div className='couches' onClick={openModal}>

                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>

                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>
                                <div className='couches'>
                                    <i class="fa-solid fa-couch couchStyle mt-5"></i>
                                </div>





                            </div>
                        </div>
                        <div className=" row ticketBought mt-5">
                            <div className="col-sm-8">
                                <div className="titleee">
                                    <h5>Barbie: Barbie Song</h5>
                                    <h6>21th Mar, 10:30</h6>
                                </div>
                                <div className="hallSeats">
                                    <div className="hallLux">
                                        <div className="hall">
                                            Hall: ...
                                        </div>
                                        <div className="lux">
                                            Lux
                                        </div>
                                    </div>
                                    <div className="seatsNumber">
                                        <div className="seats">
                                            Seats: ...
                                        </div>
                                        <div className="B7B8">
                                            B7,B8
                                        </div>
                                    </div>
                                </div>
                                <div className="buyTickets mt-4">
                                    <div className="moneyy">
                                        <h1>$26</h1>
                                    </div>
                                    <div className="buttonBuy mt-2">
                                        <button>Buy Tickets</button>
                                    </div>
                                </div>


                            </div>
                            <div className="col-sm-4 photoImg">
                                <img className='barbiera mt-3' src={Movie4} alt="" />


                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <section>
                <div className="backgroundImage">
                    <div className='row d-flex loadMore'>

                        {/* <div className="col-md-3  one">
                        <i class="fa-solid fa-photo-film"></i>
                        </div>
                        <div className="col-md-3  one">
                        <i class="fa-solid fa-photo-film"></i>
                        </div>
                        <div className="col-md-3  one">
                        <i class="fa-solid fa-photo-film"></i>
                        </div> */}
                        <button>Load More</button>

                    </div>
                </div>
            </section>

            <div className="mt-5">
                <div className="d-flex justify-content-center"> <h3>
                    Best movies to watch
                </h3>
                </div>
                <div style={{ background: '#fffefe3b', borderRadius: '100px' }} className="mt-5 pt-5 container">
                    <Carousel
                        cards={cards}
                        height="500px"
                        width="30%"
                        margin="0 auto"
                        offset={2}
                        showArrows={false}
                    />
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="rgb(89 89 89 / 21%)"
                    fill-opacity="1"
                    d="M0,192L60,208C120,224,240,256,360,245.3C480,235,600,181,720,160C840,139,960,149,1080,144C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
            </svg>
            <section className="companies">
                <div className="container ">
                    <div className="row someFeatures ">
                        <div className="col-md-2 mb-5 col-sm-6 boxesArt">
                            <div className="circleArt" onClick={navigateToTrending}>
                                <i class="fa-solid fa-chart-gantt fa-xl" ></i>
                            </div>
                            <div className="title mb-3 mt-1" >
                                Trending
                            </div>
                            <div className="text">
                                Lorem, ipsum dolor sit a met consectetur adip isicing elit.
                                Reprehen derit quis dignissimos culpa blanditiis amet.
                            </div>
                        </div>
                        <div className="col-md-2 mb-5 col-sm-6 boxesArt ">
                            <div className="circleArt" onClick={navigateToContacts}>
                                <i class="fa-solid fa-terminal fa-xl"></i>
                            </div>
                            <div className="title mb-3 mt-1">
                                Coming Soon
                            </div>
                            <div className="text">
                                Lorem, ipsum dolor sit a met consectetur adip isicing elit.
                                Reprehen derit quis dignissimos culpa blanditiis amet.
                            </div>
                        </div>
                        <div className="col-md-2 mb-5 col-sm-6 boxesArt">
                            <div className="circleArt" onClick={navigateToSaved}>
                                <i class="fa-solid fa-bookmark fa-xl"></i>
                            </div>
                            <div className="title mb-3 mt-1" >
                                Favourites
                            </div>
                            <div className="text">
                                Lorem, ipsum dolor sit a met consectetur adip isicing elit.
                                Reprehen derit quis dignissimos culpa blanditiis amet.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(89 89 89 / 21%)" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,170.7C384,192,480,256,576,272C672,288,768,256,864,250.7C960,245,1056,267,1152,266.7C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            {/* 
<div className="popo">
    <div className="olaolalaa">
<input type="text" />
<button>get weather</button>
    </div>
    <div className="opop">
<p>22</p>
<p>sunny</p>
<p>feels like</p>
<p>humidity 40%</p>
    </div>
</div> */}
        </>

    )
}

export default AllMovies
