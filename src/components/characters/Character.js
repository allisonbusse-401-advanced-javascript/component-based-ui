import React from 'react';
const propTypes = require('prop-types');
import styles from './Character.css';

const Character = ({ img, name, species }) => {
  return (
    <li className={styles.Character}>
      <img src={img} />
      <div className={styles.info}>
        <h2>Name: <span className={styles.charName}>{name}</span></h2>
        <p>Species: {species}</p>
      </div>
    </li>
  );
};

Character.propTypes = {
  img: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  species: propTypes.string.isRequired
};



export default Character;
