import React, {Component} from 'react';

class Button extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0, number: 0 };
  }

  handleClick() {
    const min = 1;
    const max = 1000000;
    const number = min + Math.random() * (max - min)
    const rand = Math.floor(number);
    this.setState({ random: rand });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>{this.props.children}</button>
        <div>The number is: {this.state.random}</div>
      </div>
    );
  }
}

export default Button;