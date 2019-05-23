import React from 'react';
import './Ninjas.css'; 

const renderNinja = (ninja) =>  {
  const { id, name, age, belt } = ninja;

  return (
    <div className="ninja" key={id}>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Belt: {belt}</div>
    </div>
  );
}

const Ninjas = ({ninjas}) => {
  const ninjaList = ninjas.map(ninja => ninja.age > 20 ? renderNinja(ninja) : null);
  return (
    <div className="ninja-list">
      { ninjaList }
    </div>
  );
}

export default Ninjas;