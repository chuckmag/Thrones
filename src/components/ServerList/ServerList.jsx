import React, { PropTypes } from 'react';
import Server from './Server.jsx';

const ServerList = ({serverList, onJoinServerClick}) => (
	<ul>
		{serverList.map(server =>
			<Server
				key={server.id}
				{...server}
				onJoinServerClick={() => onJoinServerClick(server)}
			/>
		)}
	</ul>
);

ServerList.propTypes = {
	serverList: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		playerCount: PropTypes.number.isRequired,
		gameType: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onJoinServerClick: PropTypes.func.isRequired
};

export default ServerList;