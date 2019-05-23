import React, { Component } from 'react';
import './Ninjas.css'; 

class Ninjas extends Component {

  renderNinja(ninja) {
    const { id, name, age, belt } = ninja;

    return (
      <div className="ninja" key={id}>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Belt: {belt}</div>
      </div>
    );
  }

  render() {
    const { ninjas } = this.props;

    return (
      <div className="ninja-list">
        { ninjas.map(ninja => this.renderNinja(ninja)) }
      </div>
    );
  }

}

export default Ninjas;