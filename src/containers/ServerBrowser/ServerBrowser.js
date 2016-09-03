import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { VisibleServerList } from 'containers';
import { setServerNameFilter } from 'redux/modules/serverList';

@connect(
  () => ({}),
  { setServerNameFilter })
export default class ServerBrowser extends Component {

  static propTypes = {
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

  handleSubmit = (event) => {
    event.preventDefault();
    const input = this.refs.serverName;
    this.props.setServerNameFilter(input.value);
  }

  render() {
    return (
      <div className="container">
        <Helmet title="Server Browser"/>
        <div>
          <div>
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" ref="serverName" placeholder="Enter a server and click search to filter the ServerList" className="form-control"/>
              </div>
              <button className="btn btn-success" onClick={this.handleSubmit}><i className="fa fa-sign-in"/>{' '}Search
              </button>
            </form>
          </div>
          <VisibleServerList />
        </div>
      </div>
    );
  }
}
