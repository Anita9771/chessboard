import React from 'react';
import './App.css';
import Chessboard from "chessboardjsx";


const ChessRoom = () => {
  return ( 
    <div className="chessroom">
      <h1>This is a chessroom</h1>
      <div className="chessboard">
      <React.Fragment>
          <Chessboard width={500} id="startPos" position="start" />
          <Chessboard width={500} id="startPos" position="start" />
          <Chessboard width={500} id="startPos" position="start" />
          <Chessboard width={500} id="startPos" position="start" />
          <Chessboard width={500} id="startPos" position="start" />
      </React.Fragment>
      </div>
    </div>
   );
}

//  calcWidth={(size) =>
// size.screenWidth > maxWidth &&
// size.screenHeight > maxWidth
//   ? maxWidth
//   : Math.min(size.screenWidth, size.screenHeight)
// }
 
export default ChessRoom;
