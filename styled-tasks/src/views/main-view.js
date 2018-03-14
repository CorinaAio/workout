import React from 'react';
import TasksDashboard from './tasks/dashboard/dashboard';
import AuthenticationComponent from './authentication/authentication';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import RouteWithProps from '../components/route-with-props';

export default function(props) {
	console.log(props);
	return (
		<BrowserRouter>
			<div>
				<Route path="/" exact component={AuthenticationComponent} />
		    	<RouteWithProps path="/tasks" component={TasksDashboard} {...props} />
		    </div>
		</BrowserRouter>
	);
}