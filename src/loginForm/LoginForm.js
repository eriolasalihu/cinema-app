import React from 'react'
import "../loginForm/LoginForm.scss"
import CinemaPhoto from "../img/cinemaPic.avif"
const LoginForm = () => {
    return (
        <div className='container'>
            <div className="row mt-5 containerBorder">
                <div className="col-sm-5">
                    <div className="formContainer">
                        <div className="textForLogin">
                            <h2>Welcome back!</h2>
                            <p>Please enter your details</p>
                        <div className="LoginSignUp">
                            <div className="signUpLayout">
                                Sign up
                            </div>
                            <div className="loginLayout">
                                Login
                            </div>
                        </div>
                        </div>
                        <br />
                        <div className="formInput">
                            <form action="">
                                <div className="emailLabelInput">
                                    <label htmlFor="">
                                        Email
                                    </label>
                                    <input type="text"  />
                                </div>
                                <br />
                                <div className="passwordLabelInput">
                                    <label htmlFor="">
                                        Password
                                    </label>
                                    <input type="text" />
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="loginButton">
                                <button>Login</button>
                                </div>
                                <br />
                                <div className="textttttt">
<p>By continuing you agree to our <strong>Terms of Services</strong></p>
                                </div>
<hr />
                            </form>
                        </div>

                    </div>


                </div>
                <div className="col-sm-7">
                    <div className="imageCinema">
                        <img src={CinemaPhoto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
