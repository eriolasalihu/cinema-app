import React from "react";
import Photo from "./img/paran.png";
import Photo1 from "./img/shade.png";
import Photo2 from "./img/logo.png";
import Photo3 from "./img/photo1.jpeg";
import Photo4 from "./img/photo2.jpeg";
import Photo5 from "./img/photo3.jpeg";
import Photo6 from "./img/photo4.jpeg";

const More = () => {
  return (
    <>
      <div className="containerPlus">
        <div className="imageimage">
          <div className="contain">
            <div className="shade">
              <div className="logoPng">
                <img className="logoja" src={Photo2} alt="" />
                {/* <img src={Photo1} alt="" className="imgParan" /> */}

                <div className="paran">
                  <div className="teksti">
                    <h1 className="tekstHeading">
                      Excellent <br />
                      Services & Good <br /> Prices
                    </h1>
                  </div>
                  <img src={Photo} alt="" className="imgParan" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="heading1">
            <h1>Our Menu</h1>
          </div>
          <div className="menumenu">
            <div className="salads">
              <div className="headingPizza">
                <h1>pizza</h1>
              </div>
              <div className="paragraf">
                <p>
                  At vero eos et accusamus et iusto odio
                  <br /> dignissimos ducimus qui bland itiis praesentium <br />
                  voluptatum deleniti atque corrupti.
                </p>
              </div>
              <div className="photog">
              <img className="photop" src={Photo4}/>
              </div>
            </div>
            <div className="salads">
              <div className="headingPizza">
                <h1>salads</h1>
              </div>
              <div className="paragraf">
                <p>
                  At vero eos et accusamus et iusto odio
                  <br /> dignissimos ducimus qui bland itiis praesentium <br />
                  voluptatum deleniti atque corrupti..
                </p>
              </div>
              <div className="photog">
              <img className="photop" src={Photo5}/>
              </div>
            </div>
            <div className="salads">
              <div className="headingPizza">
                <h1>desserts</h1>
              </div>
              <div className="paragraf">
                <p>
                  At vero eos et accusamus et iusto odio
                  <br /> dignissimos ducimus qui bland itiis praesentium <br />
                  voluptatum deleniti atque corrupti.
                </p>
              </div>
              <div className="photog">
              <img className="photop" src={Photo6}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
