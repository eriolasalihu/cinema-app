import React from 'react'
import { setAddList } from "../../src/redux/functions/actions";
import { connect } from "react-redux";
import Header from '../header/Header';
import "../saved/Saved.scss"
const Saved = (props) => {
  console.log('propssssss', props)
  return (
    <>
      <>
        <Header />
        <div className='container '>
          <div className='titleWishList mt-5'>
            <h2>Wish List</h2>
          </div>
          <div className="row d-flex gap-4  mb-2 allCards">
            {props?.addToCart?.map((el) => {
              return (
                <div className="col-md-3 col-12 mt-2 cardcardTrandingMovie">
                  <img src={el?.Poster} alt="" />
                  <div className='saveTitle mt-2'>
                    <div>
                      <h5>{el?.Title}</h5>
                      <h6>{el?.Year}</h6>
                                        {/* <i className="fa-regular fa-bookmark fa-xl mt-3 bookmarkButton" style={{ fontWeight: props.addToCart.find((item) => item.Title === el.Title) ? "bold" : "" }}>
                                        </i> */}
                    </div>
                  </div>
                  {/* <div onClick={() => Dion(el)}> */}
                                        {/* <ToastContainer /> */}
                                    {/* </div> */}
                </div>
              )
            })
            }
          </div>

        </div>
      </>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    addToCart: state.data.addToCart,
  }

};

const mapDispatchToProps = (dispatch) => {
  return {
    setAddList: (data) => dispatch(setAddList(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Saved);
