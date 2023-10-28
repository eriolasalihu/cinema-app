import React from 'react'
import Header from '../header/Header'

const About = () => {
  return (
    <>
    <Header/>
    <div className='container'>
      <div className="row mt-5">
        <div className="col-md-6 col-12" style={{background:'#262626', borderRadius:'20px', height:'600px', padding:'50px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <p style={{fontWeight:'600', color:'grey'}}>MORE OFFERS</p>
            <h1 style={{fontWeight:'600', color:'white', fontSize:'60px'}}>There is something else for you</h1>
            <div className='mt-5'>
                <button className='mt-5' style={{border:'none', background:'grey', borderRadius:'10px', padding:'8px 25px'}}>
                <p className='m-0 text-start' style={{fontSize:'8px'}}>SHOP</p>
                    All products
                <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
        <div className="col-md-6 col-12">
            <div style={{background:'#d7d8dc', borderRadius:'20px', height:'280px', marginBottom:'10px', padding:'20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                 <h6 style={{fontSize:'12px', fontWeight:'700', color:'black'}}>WORLD OF HEARING TECHNOLOGY</h6>
                 <div className=''>
                    <h1 style={{color:'black', fontWeight:'600'}}>View our blog</h1>
                 </div>
            </div>
            <div>
                <div className="row m-0" style={{display:'flex', justifyContent:'space-between'}}>
                    <div className="col-6 " style={{background:'#b386fd', borderRadius:'20px', height:'310px', padding:'20px', width:'49%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                     
                    <h6 style={{fontSize:'12px', fontWeight:'700', color:'white'}}>DISCOVER <br /> OUT HISTORY</h6>
                 <div className=''>
                    <h1 style={{ color:'white',}}>About us</h1>
                 </div>
                    </div>
                    <div className="col-6" style={{background:'#b1f041', borderRadius:'20px', height:'310px', padding:'20px',  width:'49%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <h6 style={{fontSize:'12px', fontWeight:'700', color:'black'}}>HAVE SOME <br /> QUESTIONS?</h6>
                 <div className=''>
                    <h1 style={{ color:'black'}}>Contact us</h1>
                 </div>
                    
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default About
