import React from 'react';
const propTypes = require('prop-types');


const List = ({ items, Component }) => {
  const characters = items.map(item => {
    return <Component key={item.name}
      {...item}
    />;
  });
  return (
    <>
      {characters}
    </>
  );
};

List.propTypes = {
  items: propTypes.array.isRequired,
  Component: propTypes.func.isRequired
};

export default List;
