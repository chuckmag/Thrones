import React, { Component, PropTypes } from 'react';
import { Server } from 'components';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { joinServer } from 'redux/modules/server';
import { isLoaded as isServerListLoaded, load as loadServerList } from 'redux/modules/serverList';

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isServerListLoaded(getState())) {
      return dispatch(loadServerList());
    }
  }
}])
@connect(
  // state => ({serverList: getVisibleServerList(state.serverList.data, { serverName: state.serverList.serverNameFilter })})
  state => ({
    serverList: state.serverList.data,
    error: state.serverList.error
  }), joinServer
  )
export default class VisibleServerList extends Component {
  static propTypes = {
    serverList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      playerCount: PropTypes.number.isRequired,
      gameType: PropTypes.string.isRequired
    }).isRequired).isRequired,
    error: PropTypes.string,
    joinServer: PropTypes.func
  };

  render() {
    const {error, serverList} = this.props;
    const styles = require('./VisibleServerList.scss');
    return (
      <div>

        {error &&
          <div className="alert alert-danger" role="alert">
            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            {' '}
            {error}
          </div>
        }
        {serverList && serverList.length &&
        <table className="table table-striped">
          <thead>
            <tr>
              <th className={styles.nameCol}>Name</th>
              <th className={styles.playerCountCol}>Player Count</th>
              <th className={styles.gameTypeCol}>Game Type</th>
              <th className={styles.buttonCol}></th>
            </tr>
          </thead>
          <tbody>
            {serverList.map(server =>
              <Server
              key={server.id}
              {...server}
              onJoinServerClick={() => this.props.joinServer(server)}
              />)
            }
          </tbody>
        </table>
        }
      </div>
    );
  }
}
