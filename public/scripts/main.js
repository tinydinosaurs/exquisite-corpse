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
import Confirmation from './components/pages/Confirmation';


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
			<Route path="/read/:storyId" component={ReadStory} />
			<Route path="/start-story" component={StartStory} />
			<Route path="/continue/:storyId" component={ContinueStory} />
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register} />
			<Route path="/confirmation" component={Confirmation} />
		</Route>
	</Router>
);

ReactDOM.render(router, document.querySelector('main'));



// should I create subcomponents for completed/incomplete/favorite/contributed to

// deal with unordered arrays on 'continue story page'
// make landing page after story submission and send users there on success

