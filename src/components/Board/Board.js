import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Box from '../Box/Box';

import './Board.css';

export default function Board() {
  const { board } = useContext(GameContext);

  return (
    <div className='board'>
      {board.map((box, i) => <Box key={i} box={box} index={i}/>)}
    </div>
  );
}