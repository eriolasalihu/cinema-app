import React from 'react'
import "../landingPagePage/Landingg.scss"
import { useNavigate } from "react-router-dom";

const Landingg = () => {

  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate('/AllMovies');
  };
  return (
    <div className='container'>
      <div className="row mt-5 mb-5">
        <div className="col-sm-6 colorOfThem">
          <h1>Choose The Type Of <br />
            Film You Liked
          </h1>
        </div>
        <div className="col-sm-6 colorOfThem">
          <p>We present 3 paskages that you can choose to start watching various <br />
            at low prices and according to your needs</p>
        </div>
      </div>
      <div className="mb-5 typesOfCategories">
        <div className="row  categories">
          <div className="col-6  imageCategories">
          <i class="fa-solid fa-gun mt-4" style={{color: 'rgb(1 17 56)', fontSize:'40px'}}></i>
          </div>
          <div className="col-6 mt-2 ms-2 textCategories">
            <div className="name">
             <h6>Action</h6> 
            </div>
            <div className="numberMovies">
            <h6> 1.300+ Movies</h6> 
            </div>
            <div className="viewMore">
             <p> <a href="#" class="pe-auto"onClick={navigateToContacts} > View More</a></p>
            </div>
          </div>
        </div>
        <div className="row categories">
        <div className="col-6  imageCategories">
          <i class="fa-solid fa-gun mt-4" style={{color: 'rgb(1 17 56)', fontSize:'40px'}}></i>
          </div>
          <div className="col-6 mt-2 ms-2 textCategories">
            <div className="name">
             <h6>Action</h6> 
            </div>
            <div className="numberMovies">
            <h6> 1.300+ Movies</h6> 
            </div>
            <div className="viewMore">
             <p> View More</p>
            </div>
          </div>
        </div>
        <div className="row categories">
        <div className="col-6  imageCategories">
          <i class="fa-solid fa-gun mt-4" style={{color: 'rgb(1 17 56)', fontSize:'40px'}}></i>
          </div>
          <div className="col-6 mt-2 ms-2 textCategories">
            <div className="name">
             <h6>Action</h6> 
            </div>
            <div className="numberMovies">
            <h6> 1.300+ Movies</h6> 
            </div>
            <div className="viewMore">
             <p> View More</p>
            </div>
          </div>
        </div>
        <div className="row categories">
        <div className="col-6  imageCategories">
          <i class="fa-solid fa-gun mt-4 " style={{color: 'rgb(1 17 56)', fontSize:'40px'}}></i>
          </div>
          <div className="col-6 mt-2 ms-2 textCategories">
            <div className="name">
             <h6>Action</h6> 
            </div>
            <div className="numberMovies">
            <h6> 1.300+ Movies</h6> 
            </div>
            <div className="viewMore">
             <p> View More</p>
            </div>
          </div>
        </div>
        <div className="row categories">
        <div className="col-6  imageCategories">
          <i class="fa-solid fa-gun mt-4" style={{color: 'rgb(1 17 56)', fontSize:'40px'}}></i>
          </div>
          <div className="col-6 mt-2 ms-2 textCategories">
            <div className="name">
             <h6>Action</h6> 
            </div>
            <div className="numberMovies">
            <h6> 1.300+ Movies</h6> 
            </div>
            <div className="viewMore">
             <p> View More</p>
            </div>
          </div>
        </div>
        <div className="row categories">
        <div className="col-6  imageCategories">
          <i class="fa-solid fa-gun mt-4" style={{color: 'rgb(1 17 56)', fontSize:'40px'}}></i>
          </div>
          <div className="col-6 mt-2 ms-2 textCategories">
            <div className="name">
             <h6>Action</h6> 
            </div>
            <div className="numberMovies">
            <h6> 1.300+ Movies</h6> 
            </div>
            <div className="viewMore">
             <p> View More</p>
            </div>
          </div>
        </div>
        <div className="row categories">
        <div className="col-6  imageCategories">
          <i class="fa-solid fa-gun mt-4" style={{color: 'rgb(1 17 56)', fontSize:'40px'}}></i>
          </div>
          <div className="col-6 mt-2 ms-2 textCategories">
            <div className="name">
             <h6>Action</h6> 
            </div>
            <div className="numberMovies">
            <h6> 1.300+ Movies</h6> 
            </div>
            <div className="viewMore">
             <p> View More</p>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Landingg
