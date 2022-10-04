import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import './Reset.css';

export default function Reset() {
  const { active, resetGame } = useContext(GameContext);
  if (!active) return <button className='reset-button' onClick={resetGame}>Reset Game</button>;
}