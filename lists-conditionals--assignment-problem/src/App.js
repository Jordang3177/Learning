import React, { Component } from 'react';
import './App.css';
import Validation from './Component/Validation';
import Char from './Component/Char';

class App extends Component {

  state = {
    textLength: '',
    text: ''
  }
  ChangedHandler = (event) => {
    this.setState({
      textLength: event.target.value.length,
      text: event.target.value
    })
  }

  deleteChar = (index) => {
    const textArray = this.state.text.split('');
    textArray.splice(index, 1);
    this.setState({ text: textArray.join('') });
  }

  render() {
    const charList = this.state.text.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        click={() => this.deleteChar(index)} />;
    });
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <p>Hint: You can convert a string into an array if you use split on that string and invert it back into text with join. </p>

        <hr />
        <input type="text" onChange={(event) => this.ChangedHandler(event)} value={this.state.text}/>
        <p>{this.state.text.length}</p>
        <Validation
          text={this.state.text.length}
        />
        {charList}
      </div>
    );
  }
}

export default App;
