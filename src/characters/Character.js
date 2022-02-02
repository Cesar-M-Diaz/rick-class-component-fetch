import React from 'react';

function Character({ character }) {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        height: '400px',
        width: '250px',
        margin: '20px 10px',
        padding: '5px',
        borderRadius: '20px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>{character.name}</h1>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <img
        style={{ width: '80%', borderRadius: '50%' }}
        src={character.image}
        alt={character.name}
      />
    </div>
  );
}

export default Character;
