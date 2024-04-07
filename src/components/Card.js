import React from 'react'

function Card({percent,text,pic}) {
  return (
    <div>
  <div class="card mb-3" style={{
    display:"inline-block",
    width:"270px",
    height:"100px"
    }}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={pic} class="img-fluid rounded-start" alt="..."/>
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