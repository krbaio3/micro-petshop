import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
// Custom Imports
import Header from './components/Header.jsx';
import ProgressBar from './components/ProgressBar.jsx';

const MarketingAppLazy = lazy(() => import('./components/MarketingApp.jsx'));
const AuthAppLazy = lazy(() => import('./components/AuthApp.jsx'));

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});
export default () => (
	<StylesProvider injectFirst generateClassName={generateClassName}>
		<BrowserRouter>
			<Fragment>
				<Header />
				<Suspense fallback={<ProgressBar />}>
					<Switch>
						<Route path='/auth' component={AuthAppLazy} />
						<Route path='/' component={MarketingAppLazy} />
					</Switch>
				</Suspense>
			</Fragment>
		</BrowserRouter>
	</StylesProvider>
);
