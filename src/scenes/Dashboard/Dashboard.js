// @flow
import React from 'react'
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
      <TasksInfoBar />
      <AddTask />
    </div>
  );
};

export default Dashboard
