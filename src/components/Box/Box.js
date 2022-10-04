import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

import './Box.css';

export default function Box({ box, index }) {

  const { takeTurn } = useContext(GameContext);

  return <div className='box' onClick={() => takeTurn(index)}>{box}</div>;
}