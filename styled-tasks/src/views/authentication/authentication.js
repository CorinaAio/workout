import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import {API_KEY, CLIENT_ID, DISCOVERY_DOCS, SCOPES} from '../../utils/auth-utils';
import TasksActions from '../../data/tasks-actions';
import TaskService from '../../services/tasks-service';

class AuthenticationComponent extends Component {

	componentDidMount() {
		const gapiScript = document.createElement('script')
	    gapiScript.src = 'https://apis.google.com/js/api.js?onload=onGapiLoad';
	    window.onGapiLoad = function onGapiLoad() {
	      AuthenticationComponent.handleClientLoad();
	    }
	    document.body.appendChild(gapiScript);
	}

	static handleClientLoad = () => {
		window.gapi.load('client:auth2', AuthenticationComponent.initClient);
	}

	static initClient = () => {
		window.gapi.client.init({
		  apiKey: API_KEY,
		  clientId: CLIENT_ID,
		  discoveryDocs: DISCOVERY_DOCS,
		  scope: SCOPES
		}).then(function () {
		  // Listen for sign-in state changes.
		  window.gapi.auth2.getAuthInstance().isSignedIn.listen(AuthenticationComponent.updateSigninStatus);

		  // Handle the initial sign-in state.
		  AuthenticationComponent.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
		});
	}

	/**
	*  Called when the signed in status changes, to update the UI
	*  appropriately. After a sign-in, the API is called.
	*/
	static updateSigninStatus = (isSignedIn) => {
		if(isSignedIn) {
			document.getElementById("sign-in") && document.getElementById("sign-in").classList.add('hidden');
			document.getElementById("sign-out") && document.getElementById("sign-out").classList.remove('hidden');
		} else {
			document.getElementById("sign-out") && document.getElementById("sign-out").classList.add('hidden');
			document.getElementById("sign-in") && document.getElementById("sign-in").classList.remove('hidden');
		}
	}

	/**
	*  Sign in the user upon button click.
	*/
	authenticateUser = () => {
		return window.gapi.auth2.getAuthInstance().signIn();
	}

	redirectToTaskManagerMainPage = () => {
		this.props.history.push({
			pathname: "/tasks",
			state: {
				userSignedIn: true
			}
		});
	}

	onSignInClickHandler = () => {
		this.authenticateUser().then(resp => {
			TaskService.getTaskLists().then(response => TasksActions.setTasksList(response));
		})
		this.redirectToTaskManagerMainPage();
	}

	/**
	*  Sign out the user upon button click.
	*/
	signoutUser = () => {
		window.gapi.auth2.getAuthInstance().signOut();
	}

	render() {
		return (
			<div>
				<button id="sign-in" onClick={this.onSignInClickHandler}>Sign in</button>
				<button id="sign-out" onClick={this.signoutUser}>Sign out</button>
			</div>
		);
	}
}


export default withRouter(AuthenticationComponent);