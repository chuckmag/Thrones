import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {server : props.server};
    //this.onLike = this.onLike.bind(this);
    this.leaveGame = this.leaveGame.bind(this);
  }

  leaveGame() {
    this.props.onLeaveGame();
  }

  render() {
    return (
      <div>
        <div>
        Server Name : {this.state.server.serverName} | Player Count : {this.state.server.playerCount}/6 | Game Type : {this.state.server.gameType}
        </div>
        <button onClick={this.leaveGame}>Leave Game</button>
      </div>
    );
  }

}

export default Game;