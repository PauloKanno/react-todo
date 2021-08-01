 //rafce snippet
import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks }) => {
    return (
        <div className="TaskList">
            {tasks.map((task) => (
                <TaskItem task={task} />
            ))}
        </div>
    )
}

export default TaskList

 