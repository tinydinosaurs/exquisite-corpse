import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import ReadStory from './components/pages/ReadStory';
import StartStory from './components/pages/StartStory';
import ContinueStory from './components/pages/ContinueStory';
import Login from './components/pages/Login';
import Register from './components/pages/Register';


$.ajaxSetup({
	headers: {
		Accept: 'application/json'
	}
});

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/read-story" component={ReadStory} />
			<Route path="/start-story" component={StartStory} />
			<Route path="/continue-story" component={ContinueStory} />
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register} />
		</Route>
	</Router>
);

ReactDOM.render(router, document.querySelector('main'));

// <Route path="/story" component={CategoryPage} onEnter={requireAuth}/>
// <Route path="/stories/:storyId/details" component={Details} onEnter={requireAuth}/>
