import React, { Component } from "react";

import './App.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 10,
      left: 10
    }
  }

  handleMouseMove = (e) => {
    e.persist();
    this.setState({
      top: e.pageY,
      left: e.pageX
    })
  }

  render() {
    const { top, left } = this.state;

    return (
        <div className="main-div"
             onMouseMove={this.handleMouseMove}
        >

          <div className="running-div"
              style={{
                top: top,
                left: left
              }}
          >
              This text runs behind the cursor!!!
          </div>

        </div>
    )
  }
}

export default App;
