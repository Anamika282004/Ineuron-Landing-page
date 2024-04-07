import React from 'react'

function Hero() {
  return (
   <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
     <div className='text' style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h1>Learning with iNeuron made</h1>
            <h2 style={{color:'#354C99'}}> <span style={{fontSize:"40px"}}>&#x2039;</span> Practical <span style={{fontSize:"40px"}}>&#8250;</span></h2>
            <p style={{width:'600px',textAlign:'justify'}}>Take your career to the next level with industry ready programs,
            An entire learning ecosystem at your fingertips to make learning fun.
            Choose from a range of tech programs and make your next big career switch.</p>
            <button className="btn btn-outline-success" type="submit" style={{backgroundColor:"#354C99",width:'160px', padding:"10px", color:"#fff"}}>Explore Courses</button>
     </div>
     <div className='image'>
          <img src='https://ineuron.ai/_next/image?url=%2Fimages%2FhomePage%2Fhero-bg.webp&w=640&q=50'></img>
     </div>
   </div>
  )
}

export default Hero