export default {
	getTaskLists,
	getTasksFromList
}

async function getTaskLists() {
	console.log(window.gapi.client)
	return await window.gapi.client.tasks.tasklists.list({
            'maxResults': 10
        }).then(response => {
        	return response.result.items;
        })
}

async function getTasksFromList(listId) {
	return await window.gapi.client.tasks.list({
		'tasklist': listId
	}).then(response => {
		return response.result.items;
	})
}