import React from 'react'

function Card({percent,text,pic}) {
  return (
    <div style={{display:"inline-block",marginTop:"30px",marginLeft:"60px"}}>
  <div class="card mb-3" style={{
    backgroundColor:"white",
   width:"276px",
   height:"100px"
    }}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={pic} class="img-fluid rounded-start" style={{padding:"20px"}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{percent}</h5>
        <p class="card-text">{text}</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card