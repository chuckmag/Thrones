import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
// import { Link } from 'react-router';
import config from '../../config';
import Helmet from 'react-helmet';
import { LinkContainer } from 'react-router-bootstrap';

@connect(
  state => ({user: state.auth.user})
)
export default class Home extends Component {

  static propTypes = {
    user: PropTypes.object
  };
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const gameOfThrones = require('./gameOfThrones.jpg');
    const {user} = this.props;
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={gameOfThrones}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>
            {user && <h2>Hello <strong>{user.name}</strong>!</h2>}
            <h2>{config.app.description}</h2>

            {!user && <LinkContainer to="/Login">
              <button className="btn btn-success"><i className="fa fa-sign-in"/>{' '}Please Log In
              </button>
            </LinkContainer>}
          </div>
        </div>

        <div className="container">


        </div>
      </div>
    );
  }
}
