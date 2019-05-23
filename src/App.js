import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { id: 1, name: 'Ryu', age: 30, belt: 'black'},
      { id: 2, name: 'Yoshi', age: 20, belt: 'green'},
      { id: 3, name: 'Chun Li', age: 25, belt: 'pink'},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
