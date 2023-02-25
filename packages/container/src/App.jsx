import React, { Fragment } from 'react';
import MarketingApp from './components/MarketingApp.jsx';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});
export default () => (
	<StylesProvider injectFirst generateClassName={generateClassName}>
		<BrowserRouter>
			<Fragment>
				<Header />
				<MarketingApp />
			</Fragment>
		</BrowserRouter>
	</StylesProvider>
);
