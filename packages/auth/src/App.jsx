import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';

import Signin from './components/Signin.jsx';
import Signup from './components/Signup.jsx';

const generateClassName = createGenerateClassName({
	productionPrefix: 'au',
});
export default ({ history }) => {
	return (
		<StylesProvider injectFirst generateClassName={generateClassName}>
			<Router history={history}>
				<Switch>
					<Route exact path='/auth/signin' component={Signin} />
					<Route path='/auth/signup' component={Signup} />
				</Switch>
			</Router>
		</StylesProvider>
	);
};
