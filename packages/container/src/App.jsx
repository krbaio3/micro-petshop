import React, { Fragment } from 'react';
import MarketingApp from './components/MarketingApp.jsx';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';

export default () => (
	<BrowserRouter>
		<Fragment>
			<Header />
			<MarketingApp />
		</Fragment>
	</BrowserRouter>
);
