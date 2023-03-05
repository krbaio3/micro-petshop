import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';

import Landing from './components/Landing.jsx';
import Pricing from './components/Pricing.jsx';

const generateClassName = createGenerateClassName({
	productionPrefix: 'ma',
});
export default ({ history }) => {
	return (
		<StylesProvider injectFirst generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route exact path='/pricing' component={Pricing} />
					<Route path='/' component={Landing} />
				</Switch>
			</Router>
		</StylesProvider>
	);
};
