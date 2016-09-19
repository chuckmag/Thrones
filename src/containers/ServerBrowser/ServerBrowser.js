import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'react-tab-view';
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
      <div className={styles.serverBrowser + ' container'}>
        <Helmet title="Server Browser"/>
        <h1>
          Thrones Games {' '}
        </h1>
        <div>
          <Tabs headers={['Game List', 'Create Game']} classPrefix={styles.tabs + ' ' + styles.tabsStyleLine }>
            <Tab>
              <div className={styles.contentWrap}>
                <section>
                  <div>
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <input type="text" ref="serverName" placeholder="Search by Name" className="form-control"/>
                      </div> {' '}
                      <button className="btn btn-success" onClick={handleSubmit}><i className="fa fa-sign-in"/>{' '}Search
                      </button>
                    </form>
                    <button className={styles.refreshBtn + ' btn btn-success'} onClick={load}>
                      <i className={refreshClassName}/> {' '} Reload Game List
                    </button>
                  </div>
                  <VisibleServerList />
                </section>
              </div>
            </Tab>
            <Tab>
              <div className={styles.contentWrap}>
                <section>
                  <h1>
                    Create a Game?
                  </h1>
                </section>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
