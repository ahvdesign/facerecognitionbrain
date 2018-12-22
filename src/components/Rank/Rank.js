import React from 'react';
import './Rank.css';

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3">{`${name}, the number of photos you have sumbitted is`}</div>
      <div className="white f1">{`${entries}!`}</div>
    </div>
  );
};

export default Rank;
