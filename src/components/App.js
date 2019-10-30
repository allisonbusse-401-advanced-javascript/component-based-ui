import React from 'react';
import Header from './header/Header';
import Character from './characters/Character';
import List from './List';
import Footer from './footer/Footer';
import styles from './App.css';

const rickandMorty = [
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/200.jpeg',
    name: 'Lawyer Morty',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/27.jpeg',
    name: 'Artist Morty',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/250.jpeg',
    name: 'Mrs. Sullivan',
    species: 'Human, cat-controlled dead lady'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/193.jpeg',
    name: 'King Jellybean',
    species: 'Alien, Jellybean'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/457.jpeg',
    name: 'Funny Songs Presenter',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/386.jpeg',
    name: 'Zarbadar Gloonch',
    species: 'Alien, Drumbloxian'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/226.jpeg',
    name: 'Million Ants',
    species: 'Animal, Sentient ant colony'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/434.jpeg',
    name: 'Super Weird Rick',
    species: 'Human'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/400.jpeg',
    name: 'Giant Judge',
    species: 'Humanoid, Giant'
  },
  {
    img: 'https://rickandmortyapi.com/api/character/avatar/146.jpeg',
    name: 'Glexo Slim Slom',
    species: 'Alien'
  }
];

const App = () => (
  <React.Fragment>
    <Header />
    <ul className={styles.flex}>
      <List
        items={rickandMorty}
        Component={Character}
      />
    </ul>
    <Footer />
  </React.Fragment>
);

export default App;
