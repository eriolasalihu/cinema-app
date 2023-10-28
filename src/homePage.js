import React from "react";
import { Link } from "react-router-dom";
import Logo from "../src/img/homePage.jpg";
import More from "./more";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid">
        <img src={Logo} alt="" className="image" />
        {/* <h2 className="titulli1">Our Passion</h2> <br/>
        <h2 className="titulli2">For Delicious</h2> <br/>
        <h2 className="titulli3">Food</h2> */}

        <h2 className="titulli1">Our Passion For Delicious Food</h2>
        <div className="circle">
          <div className="menu">
            <h2 className="menu">MENU</h2>
          </div>
        </div>
        <div className="boxes">
          <div className="box">
            <h1>01</h1>
            <h1 className="tituj">hight quality</h1>
            <p className="text">
              We serve the highest quality of prepared <br />
              meals at a great value, in a home-like and <br />
              friendly environment.
            </p>
            <button
              type="button"
              class="btn btn-outline-secondary"
              onClick={More}
            >
              More
            </button>
            {/* <Link to={`/More`} class="btn btn-primary">
              About
            </Link> */}
          </div>
          <div className="box">
            <h1>02</h1>
            <h1 className="tituj">best recipes</h1>
            <p className="text">
              We serve the highest quality of prepared <br />
              meals at a great value, in a home-like and <br />
              friendly environment.
            </p>
            <button type="button" class="btn btn-outline-secondary">
              More
            </button>
          </div>
          <div className="box">
            <h1>03</h1>
            <h1 className="tituj">real taste</h1>
            <p className="text">
              We serve the highest quality of prepared <br />
              meals at a great value, in a home-like and <br />
              friendly environment.
            </p>
            <button type="button" class="btn btn-outline-secondary">
              More
            </button>
          </div>
        </div>
        <div className="imagePart"></div>
      </div>
    </>
  );
};

export default HomePage;
