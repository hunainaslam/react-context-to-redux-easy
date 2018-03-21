import React, { Component } from 'react';
import {dispatchTransform, watch} from 'redux-easy';

export const initialState = {
  name: 'Wes',
  age: 100,
  cool: true
};

class _Person extends Component {
  growAYearOlder = () => dispatchTransform('age', age => age + 1);

  render() {
    const {age, name} = this.props;
    return (
      <div className="person">
        <p>Age: {age}</p>
        <p>Name: {name}</p>
        <button onClick={this.growAYearOlder}>🍰🍥🎂</button>
      </div>
    )
  }
}
const Person = watch(_Person, {age: '', name: ''});

const Family = props => (
  <div className="family">
    <Person />
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <p>I'm the app</p>
        <Family />
      </div>
    );
  }
}

export default App;
