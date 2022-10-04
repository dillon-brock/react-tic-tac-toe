import './App.css';
import Board from './components/Board/Board';
import Header from './components/Header/Header';
import Message from './components/Message/Message';
import Reset from './components/Reset/Reset';


function App() {
  return (
    <div className="App">
      <Header />
      <Message />
      <Board />
      <Reset />
    </div>
  );
}

export default App;
