import React from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import { toggleDialog } from './reducers';

const Welcome = (props, a) => (
	<MuiThemeProvider>
		<div>
		<Dialog
			title="Super Secret Password"
			onRequestClose={props.onTouchTap}
			open={props.isOpen}>
			1-2-3-4-5
		</Dialog>
		<FlatButton
			label="OK"
			onTouchTap={props.onTouchTap}
		/>
		</div>
	</MuiThemeProvider>
);

export default connect(state => ({isOpen: state}), {onTouchTap: toggleDialog})(Welcome);