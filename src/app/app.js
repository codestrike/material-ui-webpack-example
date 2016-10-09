import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import Main from './Main'; // Our custom react component
import Welcome from './Welcome';
import { store } from './reducers';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
// render(<Main />, document.getElementById('app'));

render(
	<Provider store={store}>
		<Welcome />
	</Provider>
, document.getElementById('app'));