import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import GoogleMaps from './Components/GoogleMapsWrapper';
import '../imports/Accounts_Config'

// Route path="/" component={App} is to display the same thing that the user will see throughout.
// IndexRoute is to display what the user will see when he reached the home page

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="contact" component={Contact} />
			<Route path="maps" component={GoogleMaps} />
		</Route>
	</Router>
)

Meteor.startup(() => {
	render(routes, document.getElementById('render-target'));
});
