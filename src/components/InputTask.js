 //rafce snippet
import React from 'react'

const InputTask = ({handleAddTask}) => {
    const [value, setValue] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={value} 
                onChange={e => setValue(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default InputTask

 