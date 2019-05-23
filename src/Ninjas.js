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
  return (
    <div className="ninja-list">
      { ninjas.map(ninja => renderNinja(ninja)) }
    </div>
  );
}

export default Ninjas;