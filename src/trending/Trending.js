import React, { useEffect, useState } from 'react'
import "../trending/Trending.scss"
import Header from '../header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ola from "../img/cinemaPic.avif"
import { connect } from "react-redux";
import {
    setAddList
} from "../../src/redux/functions/actions"
import axios from 'axios';


const Trending = (props) => {
    const [data, setMovieOla] = useState('Spider');
    const [movieData, setMovieData] = useState();


    // toast.configure()


    const Dion = (data) => {
        const isMovieInList = props.addToCart.some((item) => item.Title === data.Title);
        if (!isMovieInList) {
            props.setAddList([...props.addToCart, data]);
            toast("Added to favorites")

            // Add to favorites logic
        } else {
            // Remove from favorites logic
            const updatedFavorites = props.addToCart.filter((item) => item.Title !== data.Title);
            props.setAddList(updatedFavorites);
            toast.info("Removed from favorites")

        }
    };



    
    const movieInput = (e) => {
        // e.preventDefault();
        setMovieOla(e.target.value)
    }
    console.log("movieOla", data)

    const getData = () => {
        axios
            .get(`https://www.omdbapi.com/?apikey=4255d08e&s=${data}`)
            .then((response) => {
                const sortedMovieData = (response?.data?.Search || [])
                // .sort((a, b) => {
                //     return parseInt(b.Year, 10) - parseInt(a.Year, 10);
                // });
                setMovieData(sortedMovieData);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    console.log("movieData", movieData)


    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            getData();
        }
    };
 
    return (
        <>
            <Header />
            <div className='container mt-5'>
                <div className='inputSearchDiv'>

                    <input type="search" onChange={movieInput} onKeyUp={handleEnterKey}  className='inputSearch' />
                    <button className='buttonSearch' onClick={getData}>Submit</button>
                </div>
                <div className='titleNameTrending mb-5'><h1>Trending Films</h1></div>
                <div className="row forResponsive ">
                    {movieData?.map((el) => {
                        return (
                            <div className="col-md-3 col-sm-6 cardTrandingMovie" key={el.imdbID}>
                                <div className="ola22a">
                                    <img src={el?.Poster} alt="" />
                                </div>
                                <div className='saveTitle mt-2'>
                                    <div>
                                        <h5>{el?.Title}</h5>
                                        <h6>{el?.Year}</h6>
                                    </div>
                                    <div onClick={() => Dion(el)}>
                                        <i className="fa-regular fa-bookmark fa-xl mt-3 bookmarkButton" style={{ fontWeight: props.addToCart.find((item) => item.Title === el.Title) ? "bold" : "" }}>
                                        </i>
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {/* <div className="col-md-3 col-sm-6  cardTrandingMovie">
                        <img src={ola} alt="" />
                        <div className='saveTitle mt-2'>
                        <div>
                        <h5>Zootopia</h5>
                        <h6>Animation</h6>
                        </div>
                        <i class="fa-regular fa-bookmark fa-xl mt-3 bookmarkButton"></i>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6  cardTrandingMovie">
                        <img src={ola} alt="" />
                        <div className='saveTitle mt-2'>
                        <div>
                        <h5>Zootopia</h5>
                        <h6>Animation</h6>
                        </div>
                        <i class="fa-regular fa-bookmark fa-xl mt-3 bookmarkButton"></i>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6  cardTrandingMovie">
                        <img src={ola} alt="" />
                        <div className='saveTitle mt-2'>
                        <div>
                        <h5>Zootopia</h5>
                        <h6>Animation</h6>
                        </div>
                        <i class="fa-regular fa-bookmark fa-xl mt-3 bookmarkButton"></i>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6  cardTrandingMovie">
                        <img src={ola} alt="" />
                        <div className='saveTitle mt-2'>
                        <div>
                        <h5>Zootopia</h5>
                        <h6>Animation</h6>
                        </div>
                        <i class="fa-regular fa-bookmark fa-xl mt-3 bookmarkButton"></i>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6  cardTrandingMovie">
                        <img src={ola} alt="" />
                        <div className='saveTitle mt-2'>
                        <div>
                        <h5>Zootopia</h5>
                        <h6>Animation</h6>
                        </div>
                        <i class="fa-regular fa-bookmark fa-xl mt-3 bookmarkButton"></i>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6  cardTrandingMovie">
                        <img src={ola} alt="" />
                        <div className='saveTitle mt-2'>
                        <div>
                        <h5>Zootopia</h5>
                        <h6>Animation</h6>
                        </div>
                        <i class="fa-regular fa-bookmark fa-xl mt-3 bookmarkButton"></i>
                        </div>
                    </div> */}
                </div>
 
            </div>
            
        </>
    )
}

const mapStateToProps = (state) => {
    console.log("ola", state)
    return {
        addToCart: state.data.addToCart,
    }

};

const mapDispatchToProps = (dispatch) => {
    return {
        setAddList: (data) => dispatch(setAddList(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Trending);
