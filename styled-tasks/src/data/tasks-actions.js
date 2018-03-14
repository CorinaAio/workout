import TasksActionTypes from './action-types';
import TasksDispatcher from './tasks-dispatcher';

export default {
	setTasksList,
	addTaskList,
	addTask,
};

function setTasksList(lists) {
	TasksDispatcher.dispatch({
		type: TasksActionTypes.SET_TASKS_LIST,
		lists,
	});
}

function addTaskList(name) {
    TasksDispatcher.dispatch({
      type: TasksActionTypes.ADD_TASK_LIST,
      name,
    });
}

function addTask(name) {
	TasksDispatcher.dispatch({
      type: TasksActionTypes.ADD_TASK,
      name,
    });
}



/*  ADD_TASK_LIST: ADD_TASK_LIST,
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK_LIST: DELETE_TASK_LIST,
  DELETE_TASK: DELETE_TASK,
  EDIT_TASK: EDIT_TASK,
  SORT_TASK_LIST: SORT_TASK_LIST
  CLEAR_COMPLETED_TASKS: CLEAR_COMPLETED_TASKS,
  SORT_TASKS_BY_DATE: SORT_TASKS_BY_DATE,
  MOVE_TASK_TO_LIST: MOVE_TASK_TO_LIST,
  MOVE_TASK_UP: MOVE_TASK_UP,
  MOVE_TASK_DOWN: MOVE_TASK_DOWN*/