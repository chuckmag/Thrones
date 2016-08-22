import React, { PropTypes } from 'react';

const Server = ({onJoinServerClick, name, playerCount, gameType}) => (
	// make a join server button.
	<li>
      	Server Name : {name} | 
      	Player Count : {playerCount}/6 | 
      	Game Type : {gameType}
      	<button onClick={onJoinServerClick}>Join Server</button>
	</li>
);

Server.propTypes = {
	onJoinServerClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	playerCount: PropTypes.number.isRequired,
	gameType: PropTypes.string.isRequired
};

export default Server;