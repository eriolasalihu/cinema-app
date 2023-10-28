import React from 'react'
import logo from "../img/pngtree-film-film-icon-png-image_1574378.png"
import "../header/Header.scss"

const Header = () => {
  return (
    <>

      <nav class="navbar navbar-expand-lg  navbarStyle" > 
    <div className="container">
        <a class="navbar-brand" href="/">
         <img src={logo} alt="" style={{width:'60px'}} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="test navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link navName" href="/">
                Home
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link navName" href="AllMovies">
              All Movies
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link navName" href="trending">
                Trending
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link navName" href="comingSoon">
                Coming Soon
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link navName" href="saved">
                Favorites
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link navName" href="about">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link navName" href="about">
                Table
              </a>
            </li>
          </ul>
        </div>
    </div>
      </nav>
  </>
  )
}

export default Header
