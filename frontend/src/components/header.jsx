import {Link} from 'react-router-dom'
import React , {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from "react-router-dom"
import './header.css'
const Header = () => {
  let {user, logoutUser} = useContext(AuthContext)

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/profile"); 
  };

  return (
    <div className='header-wrapper'>
        <Link to="/" ><h3>Home</h3></Link>
            {user ? (
                 <p  onClick={logoutUser}><h3>Logout</h3></p>
            ): (
              <Link to="/login" ><h3>Login</h3></Link>
            )}
           
            {user &&   
            <div className="name-viewp">
              
              <p><h3>Hello {user.username}</h3></p>
              <button  onClick={goToLogin}><h2>View Profiles </h2></button>
            </div>
            }
    </div>
  )
}

export default Header