import Styles from "../carosueeel/card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
// import Button from "./Button";

function Card({ imagen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} style={{ width: '100%', borderRadius: ' 20px' }} alt="" />
      <div className="d-flex justify-content-center">
        <div className="title m-0">
          <h6 className="mt-2 " style={{ fontWeight: '600' }}>The IronMan</h6>
          <p style={{ fontSize: '8px', textAlign: 'center' }}>2018 * 2h 11min</p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 text-center">
          <i class="fa-solid fa-star" style={{ color: '#f9b708' }}> 8.3</i>
          <p style={{ fontSize: '8px', textAlign: 'center' }}>77 856</p>
        </div>
        <div className="col-4 text-center">
          <i class="fa-solid fa-star fa-xl " style={{ color: '#f9b708' }}></i>
          <p style={{ fontSize: '8px', textAlign: 'center' }}>My rating</p>
        </div>
        <div className="col-4 text-center">
          <i class="fa-solid fa-user" style={{ color: 'rgb(74 74 71)' }}></i>
          <p style={{ fontSize: '8px', textAlign: 'center' }}>Watched</p>
        </div>
      </div>
      
      <div className="row" style={{ background: '#80808059', borderRadius: '10px', display: 'flex', alignItems: 'center' }}>
        <div className="col-6 mt-2 p-2">
          <h6 className="" style={{ fontSize: '12px' }}>Watch online:</h6>
        </div>
        <div className="col-6 justify-content-end d-flex gap-1" >
          <i class="fa-solid fa-icons"></i>
          <i class="fa-solid fa-music"></i>
          <i class="fa-solid fa-film"></i>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-4 p-0" style={{ borderBottom: '1px solid #f9b708' }}>Overview</div>
        <div className="col-4">Details</div>
        <div className="col-4">Reviews</div>
      </div>
    </animated.div>
  );
}

export default Card;