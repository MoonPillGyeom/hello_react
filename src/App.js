import Button from "./Button";
import Board from "./Board";
import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";

const logoImg = logo;

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <div>
        <img className="App=logo" src={logoImg} alt="주사위 모양" />
        <h1 className="App-title">주사위게임</h1>
        <Button className="App-button" color="blue" onClick={handleRollClick}>
          던지기
        </Button>

        <Button className="App-button" color="red" onClick={handleClearClick}>
          처음부터
        </Button>
      </div>
      <div className="App-boards">
        <div className="Board App-board">
          <Board
            className="Board-heading"
            name="나"
            color="blue"
            gameHistory={myHistory}
          />
        </div>
        <div className="Board App-board">
          <Board
            className="Board-heading"
            name="상대"
            color="red"
            gameHistory={otherHistory}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
