import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';

export default function Box({ box, index }) {

  const { takeTurn } = useContext(GameContext);

  const handleClick = () => {
    if (box === '') {
      takeTurn(index);
    }
  };

  return <div className='box' onClick={handleClick}>{box}</div>;
}