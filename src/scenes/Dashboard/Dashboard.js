// @flow
import React from 'react'
import { Route } from 'react-router-dom';
import TasksInfoBar from './TasksInfoBar/TasksInfoBar';
import createDynamicComponent from '../../components/DynamicComponent/DynamicComponent';

type Props = {
  match: {
    url: string,
  },
};

const AddTask = createDynamicComponent(
  () => import('./AddTask/AddTask'),
  /* istanbul ignore next */
  () => require('./AddTask/AddTask'),
);

const Dashboard = ({ match }: Props) => {
  return (
    <div>
      <TasksInfoBar base={match.url} />
      <Route path={`${match.url}/addtask`} component={AddTask} />
    </div>
  );
};

export default Dashboard
