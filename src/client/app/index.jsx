import React from 'react';
import {render} from 'react-dom';
import ServerBrowser from './ServerBrowser.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello Throneser!</p>
        <ServerBrowser/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

/*
//CommonJs style import
var greet = require('./greet');

//Es6 module style import
import sum from './sum';

//Scss entry point
require('../styleSheets/base.scss');

console.log('Index Loaded, the sum is', sum);
alert(greet);*/