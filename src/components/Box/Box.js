import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

import './Box.css';

export default function Box({ box, index }) {

  const { takeTurn } = useContext(GameContext);

  const handleClick = () => {
    takeTurn(index);
  };

  return <div className='box' onClick={handleClick}>{box}</div>;
}