import React from 'react';
import TasksInfoBar from './TasksInfoBar/TasksInfoBar';
import createDynamicComponent from '../../components/DynamicComponent/DynamicComponent';

const AddTask = createDynamicComponent(
  () => import('./AddTask/AddTask'),
  /* istanbul ignore next */
  () => require('./AddTask/AddTask'),
);

const Dashboard = () => {
  return (
    <div>
      <TasksInfoBar />
      <AddTask />
    </div>
  );
};

export default Dashboard;
