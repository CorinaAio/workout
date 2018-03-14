import React, { Component } from 'react';
import './dashboard.css';
import {Router, Route, Link} from 'react-router';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import TasksActions from '../../../data/tasks-actions';
import TasksList from '../list/list';
import TaskList from '../task/list/task-list';
import styles from '../../../utils/tasks-styles-utils';

class TasksDashboard extends Component {

	getDashboardLayout = (state) => {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Grid container spacing={0} style={{height: '100%'}}>
				<TasksList state={state}/>
				<TaskList state={state}/>
				</Grid>
		    </div>
		);
	}

	render() {
	  	let {userSignedIn} = this.props.location.state || {},
		  	{state} = this.props;

	    return userSignedIn ? this.getDashboardLayout(state) : <span>You need to login in order to access the tasks list</span>
	}
}

export default withStyles(styles)(TasksDashboard);