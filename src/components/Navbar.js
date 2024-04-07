

function Navbar() {
  return (
    <div style={{backgroundColor:"white",borderColor:"white"}}>
 <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <img className ="navbar-brand" src="https://ineuron.ai/images/ineuron-logo.png" style={{width:"140px", height: "50px"}}/>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search by product title" aria-label="Search" style={{width: "65rem"}}/>
      <button className="btn btn-outline-success" type="submit" style={{backgroundColor:"#354C99", padding:"12px", color:"#fff"}}>Login/Register</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar