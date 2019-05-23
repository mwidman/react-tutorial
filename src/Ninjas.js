import React from 'react';
import './Ninjas.css'; 

const renderNinja = (ninja, deleteNinja) =>  {
  const { id, name, age, belt } = ninja;

  return (
    <div className="ninja" key={id}>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Belt: {belt}</div>
      <button onClick={() => deleteNinja(id)}>Delete Ninja</button>
    </div>
  );
}

const Ninjas = ({ninjas, deleteNinja}) => {
  const ninjaList = ninjas.map(ninja => ninja.age > 20 ? renderNinja(ninja, deleteNinja) : null);
  return (
    <div className="ninja-list">
      { ninjaList }
    </div>
  );
}

export default Ninjas;