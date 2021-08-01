 //rafce snippet
import React from 'react'

const TaskItem = ({ task }) => {
    return (
        <h3 key={task.id}>{task.text}</h3>
    )
}

export default TaskItem
