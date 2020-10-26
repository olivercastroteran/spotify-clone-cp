import React from 'react';
import Header from '../../../components/Header/Header';
import { useStateValue } from '../../../StateProvider';
import './Body.css';

const Body = ({ spotify }) => {
  const [{ discover_weekly }] = useStateValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="banner" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
