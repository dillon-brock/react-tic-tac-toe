import { useContext } from 'react';
import { GameContext } from '../../context/GameContext';
import Box from '../Box/Box';

export default function Board() {
  const { board } = useContext(GameContext);

  return (
    board.map((box, i) => <Box key={i} box={box} index={i}/>)
  );
}