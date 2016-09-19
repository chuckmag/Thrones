import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { VisibleServerList } from 'containers';
import { asyncConnect } from 'redux-async-connect';
import { isLoaded as isServerListLoaded, load as loadServerList} from 'redux/modules/serverList';
import * as serverListActions from 'redux/modules/serverList';

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isServerListLoaded(getState())) {
      return dispatch(loadServerList());
    }
  }
}])
@connect(
  state => ({
    loading: state.serverList.loading
  }),
  { ...serverListActions })
export default class ServerBrowser extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    load: PropTypes.func,
    setServerNameFilter: PropTypes.func.isRequired
  };

  // preventDuplicateServer() {
  //   const serverNameCreateCheck = this.state.serverNameCreate;
  //   const serversToCheck = this.state.servers;
  //   let duplicateServer = false;
  //   for (let id = 0; id < serversToCheck.length; id++) {
  //     const serverToCheck = serversToCheck[id];
  //     if (serverToCheck.serverName === serverNameCreateCheck) {
  //       duplicateServer = true;
  //       break;
  //     }
  //   }

  //   return duplicateServer;
  // }


  render() {
    const {loading, load} = this.props;

    const handleSubmit = (event) => {
      event.preventDefault();
      const input = this.refs.serverName;
      this.props.setServerNameFilter(input.value);
    };

    let refreshClassName = 'fa fa-refresh';
    if (loading) {
      refreshClassName += ' fa-spin';
    }
    const styles = require('./ServerBrowser.scss');
    return (
      <div className={styles.widgets + ' container'}>
        <Helmet title="Server Browser"/>
        <h1>
          Thrones Games {' '}
          <button className={styles.refreshBtn + ' btn btn-success'} onClick={load}>
            <i className={refreshClassName}/> {' '} Reload Game List
          </button>
        </h1>
        <div>
          <div>
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" ref="serverName" placeholder="Search by Name" className="form-control"/>
              </div> {' '}
              <button className="btn btn-success" onClick={handleSubmit}><i className="fa fa-sign-in"/>{' '}Search
              </button>
            </form>
          </div>
          <VisibleServerList />
        </div>
      </div>
    );
  }
}
