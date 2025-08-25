import { useState } from 'react';

interface IFormTaskProps {
    onAdd(
        task: string,
        description: string,
        taskPoints: number,
        complete: boolean
    ): void;
}

export const FormTask = (props: IFormTaskProps) => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    const [taskPoints, setTaskPoints] = useState(0);
    const [complete, setComplete] = useState(false);

    const handleAdd = () => {
        props.onAdd(task, description, taskPoints, complete);
        setTask('');
        setDescription('');
        setTaskPoints(0);
        setComplete(false);
    }

    return (
        <div>
            <input name='task' type="text" placeholder="Task" value={task} onChange={(e) => { setTask(e.target.value) }} />
            <input name='description' type="text" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
            <input name='taskPoints' type="number" placeholder="Price" value={taskPoints} onChange={(e) => { setTaskPoints(Number(e.target.value)) }} />
            <label>
                Complete
                <input name='complete' type='checkbox' checked={complete} onChange={(e) => { setComplete(e.target.checked) }} />
            </label>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}