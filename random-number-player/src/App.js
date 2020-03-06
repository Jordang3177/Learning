import React, {Component} from 'react';
import axios from './axios-prize';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {name: '', number: 0, loading: false, people: new Set()}
  }


  componentDidMount() {
    console.log('loading');
    axios.get('https://random-nunber-prize.firebaseio.com/attempts.json')
    .then(res => {
      const people = new Set()
      for (var key in res.data){
        people.add(res.data[key].name);
      }
      this.setState({people: people});
      console.log(this.state.people);
    })
    console.log('loaded');
  }
  postDataHandler = event => {
    this.setState({ loading: true})
    
    const data = {
        name: this.state.name,
        number: this.state.number,
        date: new Date().toLocaleString()
    };
    if (this.state.name !== '' && this.state.number !== 0){
    axios.post('/attempts.json', data)
          .then(response => this.setState({ loading: false }))
          .catch(error => this.setState({ loading: false }));
    }
}
handleClick() {
  const min = 1;
  const max = 1000;
  const number = min + Math.random() * (max - min)
  const rand = Math.floor(number);
  this.setState({ number: rand });
}

  render() {
  return (
    <div className="App">
      <br/>
      <p></p>
      <input type='text' value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
      <br/>
      <button onClick={this.handleClick.bind(this)}>Click Me</button>
        <div>The number is: {this.state.number}</div>
      <button onClick={this.postDataHandler}>Submit Name and Number</button>
      {console.log(this.state.people)}
    </div>
    
  );
  }
}

export default App;
