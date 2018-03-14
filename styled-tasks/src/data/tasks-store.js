import {ReduceStore} from 'flux/utils';
import TasksActionTypes from './action-types';
import TasksDispatcher from './tasks-dispatcher';
import {cloneDeep} from 'lodash';

class TasksStore extends ReduceStore {
  constructor() {
    super(TasksDispatcher);
  }

  getInitialState() {
    return {tasksLists : []};
  }

  reduce(state, action) {
    switch (action.type) {
		case TasksActionTypes.SET_TASKS_LIST:
			let newState = cloneDeep(state);
			newState.tasksLists = [...action.lists];
			if(!newState.selectedList) {
				newState.selectedList = newState.tasksLists[0];
			}
	        return newState;

    	case TasksActionTypes.ADD_TASK_LIST:
	       	// Do nothing for now, we will add logic here soon!
	       	return state;

    	default:
	        return state;
    }
  }
}

export default new TasksStore();