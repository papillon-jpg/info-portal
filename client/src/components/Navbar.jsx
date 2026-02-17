import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import Logo1 from "../img/logo1.png";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
        <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          <img src={Logo1} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=biznis">
            <h6>BIZNIS</h6>
          </Link>
          <Link className="link" to="/?cat=sport">
            <h6>SPORT</h6>
          </Link>
          <Link className="link" to="/?cat=lifestyle">
            <h6>LIFESTYLE</h6>
          </Link>
          <Link className="link" to="/?cat=auto">
            <h6>AUTO</h6>
          </Link>
          <Link className="link" to="/?cat=umjetnost">
            <h6>UMJETNOST</h6>
          </Link>
          <Link className="link" to="/?cat=hrana">
            <h6>HRANA</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              NAPIŠI
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar