import React from 'react';
import TasksInfoBar from './components/tasksinfobar';
import Timer from './components/timer';
import FeaturedTask from './components/featuredtask';
import AddTask from './components/addtask';
import style from './style.scss';

export default function () {
  return (
    <div className={style.dashboard}>
      <TasksInfoBar />
      <Timer />
      <FeaturedTask />
      <AddTask />
    </div>
  );
}
