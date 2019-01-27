import React, { Component } from 'react';
import './App.css';
import User from './info/Info';
import Form from './form/form';

class App extends Component {
  // the default info without modifying
  state = {
    name: '',
    age: '',
    hobby: ''
  };
  // clear the form
  clearForm = () =>{
    this.setState({
      name: '',
      age: '',
      hobby: ''
    });
    let inputs = document.getElementsByTagName("input");
    for(let i = 0;i < inputs.length;i++){
      inputs[i].value = '';
    }
  }
  // get the new name and change it
  changename = (event) =>{
    this.setState({
      name: event.target.value,
      age: this.state.age,
      hobby: this.state.hobby
    });
  }
  // get the new age and change it
  changeage = (event) =>{
    this.setState({
      name: this.state.name,
      age: event.target.value,
      hobby: this.state.hobby
    });
  }
  // get the new hobby and change it
  changehobby = (event) =>{
    this.setState({
      name: this.state.name,
      age: this.state.age,
      hobby: event.target.value
    });
  }

  render() {
    const buttonStyle = {
      border: '1px solid #eee',
      borderRadius: '5px',
      backgroundColor: '#DDD',
      padding: '10px',
      width: '100px',
      cursor: 'pointer'
    }
    return (
      <div className='App'>
        <Form
          changeyName={this.changename}
          changeyAge={this.changeage}
          changeyHobby={this.changehobby}
          name={this.state.name}
          age={this.state.age}
          hobby={this.state.hobby} />
        <button onClick={this.clearForm} style={buttonStyle}>Clear</button>
        <User
         name={this.state.name}
         age={this.state.age}
         hobby={this.state.hobby} >The End</User>
      </div>
    );
  }
}

export default App;
