import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logoPath from "../../assets/bramcollegeclear.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/profile"}>Profile</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div className="nav-login-links">
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar">
        {/*<h1>CGDb</h1>*/}
        <div className="logo-assets">
          <img src={logoPath} alt="logo" />
          <h1>BRAM COLLEGE</h1>
        </div>
        {this.getLinks()}
      </nav>
    );
  }
}

export default Navbar;
