import React from 'react'

const ContactForm = () => {
  return (
<>
<div className="col-9 container form">
<div className="col-6 locationFollow ">
    <div className="location">
<h1 className="locheading">
    Location
</h1>
<p>28 Jackson Blvd Ste 1020 Chicago <br/>
IL 60604-2340</p>
    </div>
    <div className="followUs">
<h1 className="followHeading">
    follow us
</h1>
<p>©2018 Privacy policy</p>
    </div>
    </div>
    <div className="col-4 contactForm">
    <h1 className="followHeading">
    contact form
</h1>
<div className="container mt-3">
      <form >
        <div className="mb-3">
          <input className="form-control" type="text" id="name" placeholder="Enter your name..."required />
        </div>
        <div className="mb-3">
          <input className="form-control" type="email" id="email" placeholder="Enter a valid email address..." required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" id="message" placeholder="Enter your message..." required />
        </div>
        <button className="btn btn-danger" type="submit">
         Submit
        </button>
      </form>
    </div>
    </div>
</div>

</>
  )
}

export default ContactForm
