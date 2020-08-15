import React from "react";
import "./app.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Helmet from "react-helmet";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
    this.handleMenu = this.handleMenu.bind(this);
  }
  handleMenu() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>My Website</title>
        </Helmet>
        <Sidebar mainstate={this.state} handleMenu={this.handleMenu} />
      </div>
    );
  }
}

export default App;
