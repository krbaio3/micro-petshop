import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';

import Landing from './components/Landing.jsx';
import Pricing from './components/Pricing.jsx';

const generateClassName = createGenerateClassName({
	productionPrefix: 'ma',
});
export default () => {
	return (
		<StylesProvider injectFirst generateClassName={generateClassName}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/pricing' component={Pricing} />
					<Route path='/' component={Landing} />
				</Switch>
			</BrowserRouter>
		</StylesProvider>
	);
};
