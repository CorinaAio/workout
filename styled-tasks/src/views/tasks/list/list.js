import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import TasksActions from '../../../data/tasks-actions';
import styles from '../../../utils/tasks-styles-utils';
import List, { ListItem, ListItemText } from 'material-ui/List';
import React, { Component } from 'react';
import {Router, Route, Link} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';;


class TasksList extends Component {

	getTitleBar = () => {
		return (
	        <Toolbar>
	          <Typography variant="title" color="textSecondary">
	            Task lists
	          </Typography>
	        </Toolbar>
		);
	}

	getList = (tasksLists) => {
		return (
			<List component="nav">
				{tasksLists.map(list => {
					return (
						<div>					
					        <ListItem button>
						        <ListItemText primary={list.title} />
					        </ListItem>
					        <Divider />
				        </div>
					)
				})}
	      </List>
		);
	}

	render() {
		const {classes, state: {tasksLists} } = this.props
		return (
			<Grid item xs={12} sm={2}>
		        {this.getTitleBar()}
		        <Paper className={classes.paper}>
			        {this.getList(tasksLists)}
		        </Paper>
	        </Grid>
		);
	}
}

export default withStyles(styles)(TasksList);