import React, { Component } from 'react';
const propTypes = require('prop-types');
import styles from './Character.css';

class Character extends Component {
  static propTypes = {
    img: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    species: propTypes.string.isRequired
  }
  render() {
    const { img, name, species } = this.props;
    return (
      <li className={styles.Character}>
        <img src={img} />
        <div className={styles.info}>
          <h2>Name: <span className={styles.charName}>{name}</span></h2>
          <p>Species: {species}</p>
        </div>
      </li>
    );
  }
}





export default Character;
