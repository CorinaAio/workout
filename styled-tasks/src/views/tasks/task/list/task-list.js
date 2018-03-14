import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import styles from '../../../../utils/tasks-styles-utils';

class TaskList extends Component {

	getTitleBar = (selectedList) => {
		return (
			<AppBar position="static" color="primary">
		        <Toolbar>
		          <Typography variant="title" color="inherit">
		            {selectedList.title || 'Task list'}
		          </Typography>
		        </Toolbar>
		    </AppBar>
		);
	}

	render() {
		const { classes } = this.props;
		let {state: {selectedList = {}}} = this.props;
		return (
			<Grid item xs={12} sm={10}>
				{this.getTitleBar(selectedList)}
				<Paper className={classes.paper}>
				</Paper>
	        </Grid>
		);
	}
}

export default withStyles(styles)(TaskList);