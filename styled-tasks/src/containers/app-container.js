import MainView from '../views/main-view';
import {Container} from 'flux/utils';
import TasksStore from '../data/tasks-store';

function getStores() {
  return [
    TasksStore,
  ];
}

function getState() {
  return {
    state: TasksStore.getState(),
  };
}

export default Container.createFunctional(MainView, getStores, getState);