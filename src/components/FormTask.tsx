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
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
            <form
                style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
                action=""
            >
                <input
                    style={{ border: 'none', backgroundColor: '#3d3d56', color: '#fff', height: '26px', borderRadius: '5px', padding: '10px', fontSize: '16px', fontWeight: 'bold' }}
                    name='task' type="text" placeholder="Task" value={task} onChange={(e) => { setTask(e.target.value) }} />
                <input name='description' type="text" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                <input name='taskPoints' type="number" placeholder="Price" value={taskPoints} onChange={(e) => { setTaskPoints(Number(e.target.value)) }} />
                <label>
                    Complete
                    <input name='complete' type='checkbox' checked={complete} onChange={(e) => { setComplete(e.target.checked) }} />
                </label>
                <button onClick={handleAdd}>Add</button>
            </form>
        </div>
    )
}