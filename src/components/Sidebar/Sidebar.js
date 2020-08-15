import React from "react";
import "./sidebar.css";
import Home from "../../Pages/Home/Home";
import Projects from "../../Pages/Projects/Projects";
import ReactLogo from "../../assets/react_logo.png";
import HomeIcon from "../../assets/home.svg";
import BuildIcon from "../../assets/wrench.svg";
import MenuIcon from "../../assets/hamburger.png";

class Sidebar extends React.Component {
  render() {
    var navlinks = [
      { logo: HomeIcon, link: "/", name: "Home" },
      { logo: BuildIcon, link: "/projects", name: "Projects" },
    ];
    return (
      <div className={this.props.mainstate.isMenuOpen ? "main" : "main-closed"}>
        <div
          className={
            this.props.mainstate.isMenuOpen
              ? "menuButton-open"
              : "menuButton-closed"
          }
          onClick={this.props.handleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="navlinks">
          {navlinks.map((links) => (
            <div
              className={
                this.props.mainstate.isMenuOpen ? "navitems" : "navitems-closed"
              }
            >
              <div>
                <img src={links.logo}></img>
              </div>
              {this.props.mainstate.isMenuOpen ? (
                <div style={{ width: 100 }}>
                  <p className="menuName">{links.name}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        {this.props.mainstate.isMenuOpen ? (
          <div className="technology">
            <h1>
              Created with <img src={ReactLogo} height="50px"></img>
            </h1>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Sidebar;
