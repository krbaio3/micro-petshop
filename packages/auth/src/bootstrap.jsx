import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';

import App from './App.jsx';

const selector = '#_auth-dev-root';

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
	// Create a memory history object
	const history =
		defaultHistory ||
		createMemoryHistory({
			initialEntries: [initialPath],
		});

	if (onNavigate) {
		// If onNavigate is passed, listen to history changes
		history.listen(onNavigate);
	}

	ReactDOM.render(<App history={history} />, el);

	return {
		onParentNavigate({ pathname: nextPathname }) {
			const { pathname } = history.location;
			console.log(nextPathname);

			if (pathname !== nextPathname) {
				history.push(nextPathname);
			}
		},
	};
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector(selector);
	if (devRoot) {
		mount(devRoot, { defaultHistory: createBrowserHistory() });
	}
}

// We are running through container, and we should export the mount function
export { mount };