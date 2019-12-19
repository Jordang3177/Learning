import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends Component {

  state = {
    username: [
      { username: 'Jordang3177', name: 'Jordan Graves' },
      { username: 'wrlan545', name: 'Ruolan Wu' }
    ]
  }

  switchUsernameHandler = (event) => {
    this.setState({
      username: [
        { username: event.target.value, name: 'Jordan Graves' },
        { username: 'wrlan545', name: 'Ruolan Wu'}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li className='Finished'>Create TWO new components: UserInput and UserOutput</li>
          <li className='Finished'>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li className='Finished'>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li className='Finished'>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li className='Finished'>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li className='Finished'>Add a method to manipulate the state (=> an event-handler method)</li>
          <li className='Finished'>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <UserOutput
          name={this.state.username[0].name}
          username={this.state.username[0].username}
        />
        <UserInput 
          changed={this.switchUsernameHandler}
          username={this.state.username[0].username}
        />
        <UserOutput
          name={this.state.username[1].name}
          username={this.state.username[1].username}
        />
      </div>
    );
  }
}

export default App;
