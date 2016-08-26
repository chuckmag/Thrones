import { createStore } from 'redux';
import thronesApp from './reducers/index.jsx';
import { loadState, saveState } from './localStorage.jsx';
import throttle from 'lodash/throttle.js';

const configureStore = () => {
	const persistedState = loadState();
	const store = createStore(thronesApp, persistedState, window.devToolsExtension && window.devToolsExtension());

	store.subscribe(throttle(() => {
		saveState(store.getState());
	}, 1000));

	return store;
}

export default configureStore;