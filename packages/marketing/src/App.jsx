import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core';

import Landing from './components/Landing.jsx';
import Pricing from './components/Pricing.jsx';

export default () => {
	return (
		<StylesProvider injectFirst>
			<Router>
				<Switch>
					<Route exact path='/pricing' component={Pricing} />
					<Route path='/' component={Landing} />
				</Switch>
			</Router>
		</StylesProvider>
	);
};
