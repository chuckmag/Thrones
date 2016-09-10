import React, { Component, PropTypes } from 'react';

export default class server extends Component {
  static propTypes = {
    onJoinServerClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    playerCount: PropTypes.number.isRequired,
    gameType: PropTypes.string.isRequired
  };

  render() {
    const {name, playerCount, gameType} = this.props;
    const styles = require('./Server.scss');

    return (
      <tr>
        <td className={styles.idCol}>{name}</td>
        <td className={styles.colorCol}>{playerCount}/6</td>
        <td className={styles.sprocketsCol}>{gameType}</td>
        <td className={styles.buttonCol}>
          <button className="btn btn-primary" onClick={this.props.onJoinServerClick}>Join Server</button>
        </td>
      </tr>
    );
  }
}
