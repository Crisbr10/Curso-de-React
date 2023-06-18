import React from 'react'
import { Task } from '../../models/task.class';
import { Levels } from '../../models/levels.enum';
import TaskComponent from '../pure/Task';

const TaskListComponent = () => {

    const defaultTask = new Task('Example','Default Description',false,Levels.NORMAL)

  return (
    <div>
        <h1>Your Task</h1>
        {/* TODO: Aplicar un for/map para renderizar una lista de tareas */}
        <TaskComponent task={defaultTask}/>
    </div>
  )
}

export default TaskListComponent;
