import React from 'react';
import TasksInfoBar from './TasksInfoBar/TasksInfoBar';
import createDynamicComponent from '../../components/DynamicComponent/DynamicComponent';

const AddTask = createDynamicComponent(
  () => import('./AddTask/AddTaskContainer'),
  /* istanbul ignore next */
  () => require('./AddTask/AddTaskContainer'),
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
