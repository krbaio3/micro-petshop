import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

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
