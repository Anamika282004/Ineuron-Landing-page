import React from 'react'

function Navbar2() {
  return (
    <div>
        <ul class="nav nav-tabs"  style={{display: 'flex', flexDirection:'row', justifyContent:'center', padding:"15px", fontSize:"16px",fontFamily:'sans-serif'}}>
  <li class="nav-item dropdown"  style={{ color:'black'}}>
    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" style={{ color:'black'}}>Courses</a>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Bootcamp</a></li>
      <li><a class="dropdown-item" href="#">Community Program</a></li>
      <li><a class="dropdown-item" href="#">Courses</a></li>
      <li><hr class="dropdown-divider"/></li>
      <li><a class="dropdown-item" href="#">Neuro Labs</a></li>
    </ul>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled"  style={{ color:'black'}}>One Neuron</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true"  style={{ color:'black'}}>Support System</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#"  style={{ color:'black'}}>Neuro Lab</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true"  style={{ color:'black'}}>Job Portal</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#"  style={{ color:'black'}}>Internship Portal</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true"  style={{ color:'black'}}>Become an affliate</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true"  style={{ color:'black'}}>Hall of fame</a>
  </li>

</ul>
    </div>
  )
}

export default Navbar2