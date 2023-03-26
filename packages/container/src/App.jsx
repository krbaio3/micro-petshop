import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
// Custom Imports
import Header from './components/Header.jsx';
import MarketingApp from './components/MarketingApp.jsx';
import AuthApp from './components/AuthApp.jsx';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});
export default () => (
	<StylesProvider injectFirst generateClassName={generateClassName}>
		<BrowserRouter>
			<Fragment>
				<Header />
				<Switch>
					<Route path='/auth' component={AuthApp} />
					<Route path='/' component={MarketingApp} />
				</Switch>
			</Fragment>
		</BrowserRouter>
	</StylesProvider>
);
