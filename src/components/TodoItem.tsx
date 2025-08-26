import { Card } from "../components/Card"
import { CardTitle } from "../components/CardTitle"
import { CardContent } from "../components/CardContent"


interface ITodoItemProps {
    id: number;
    task: string;
    description: string;
    taskPoints: number;
    complete: boolean;
    onDelete(id: number): void;
    onComplete(id: number): void;
}

export const TodoItem = ({ id, task, description, taskPoints, complete, onDelete, onComplete }: ITodoItemProps) => {

    return (
        <li>
            <Card key={id}>
                <CardTitle>
                    <h1>
                        {task}
                    </h1>
                    {!complete ? (
                        <button style={{ height: '30px', backgroundColor: 'red', color: '#fff', border: 'none', borderRadius: '4px' }} onClick={() => onDelete(id)}>
                            Delete
                        </button>
                    ) : (
                        <span style={{ fontSize: '16px', color: 'green' }}>Completed</span>
                    )}
                </CardTitle>
                <CardContent>
                    <p style={{ fontSize: '14px', color: 'gray', padding: '0px 14px' }}>{description}</p>
                    <p>Get <span style={{ fontSize: '20px', color: '#fff', fontWeight: 'bold', border: 'none', borderRadius: '5px', backgroundColor: 'green', padding: '6px' }}>{taskPoints}</span> points</p>
                </CardContent>
                {!complete && <button
                    style={{ color: '#fff', cursor: 'pointer', backgroundColor: 'green', border: 'none', padding: '10px', borderRadius: '5px', marginBottom: '10px', width: '100%' }}
                    onClick={() => onComplete(id)}
                >
                    Done!
                </button>
                }
            </Card>
        </li>
    )
}