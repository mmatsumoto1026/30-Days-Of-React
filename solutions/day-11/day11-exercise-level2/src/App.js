// index.js
import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        const positionX = Math.floor(Math.random() * (window.innerWidth - 300));
        const positionY = Math.floor(Math.random() * (window.innerHeight - 60));
        this.state = {
          posX: positionX,
          posY: positionY
        };
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

  handleMouseMove() {
    let positionX = Math.floor(Math.random() * (window.innerWidth - 300));
    let positionY = Math.floor(Math.random() * (window.innerHeight - 60));
    this.setState({
      posX: positionX,
      posY: positionY,
    });
  }

  render() {
    let styles = {
      position: 'absolute',
      top: this.state.posY,
      left: this.state.posX,
      backgroundColor: '#61DBFC',
      width: 300,
      height: 60,
      lineHeight: '60px',
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'center',
      textShadow: '0.5px 0.5px 2px #600, 2px 2px 3px #fff',
      color: '#454545'
    };

    return (
      <div onMouseMove={this.handleMouseMove} style={styles}>
        30 Days Of React
      </div>
    );
  }
}

export default App;