import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import thronesApp from './reducers/index.jsx';
import App from './components/App.jsx';

let store = createStore(thronesApp);

render(
	<Provider store={store}>
		<App />
	</Provider>
	,
	document.getElementById('app')
);