import "./App.css";
import React, { useState, useEffect, useRef } from "react"
import Chessboard from "chessboardjsx"
import Chess from "chess.js"



const App = () => {
    const [fen, setFen] = useState("start")

    let game = useRef(null);
  
    useEffect(() => {
      game.current = new Chess();
    }, [])
  
    const onDrop = ({sourceSquare, targetSquare}) => {
      let move = game.current.move({
        from: sourceSquare,
        to: targetSquare
      })
  
      if(move === null) return;
  
      setFen(game.current.fen())
    }
  
  
    const resetGame = () => {
      game.current.clear();
      game.current.reset();
      setFen("start")
    }
    return ( 
        <div className="board">
            {
              game.current && game.current.game_over() ? <div className="game-status"><h2>GAME OVER </h2><br/><button onClick = { resetGame }>REPLAY</button></div> : <span></span>
            }
          <Chessboard width = { 400 } id="positionObject" position={ fen } onDrop = {onDrop} />
          </div>
     );
}
 
export default App;