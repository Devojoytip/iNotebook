import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  let navigate = useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

          </ul>

          {
            (localStorage.getItem('token'))
              ?
              <button type="button" class="btn btn-primary" onClick={handleLogout}>Logout</button>
              :
              <form className='d-flex'>
                <Link className="btn btn-primary mx-2" to="/login">Login</Link>
                <Link className="btn btn-primary mx-2" to="/signup">Signup</Link>
              </form>
          }

        </div>
      </div>
    </nav>
  )
}

export default Navbar