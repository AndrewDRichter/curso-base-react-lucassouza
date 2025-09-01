import axios from "axios"


const api = axios.create({
    baseURL: '/api'
});

interface ITodo {
    id: number;
    task: string;
    description: string;
    taskPoints: number;
    complete: boolean;
}

interface ITodoWithoutId {
    task: string;
    description: string;
    taskPoints: number;
    complete: boolean;
}

export const TodoAPI = {
    async getAll() {
        const response = await api.get('/todos');
        console.log(response)
        return response.data.todos as ITodo[];
    },
    async create(data: ITodoWithoutId) {
        const response = await api.post('/todos', data);

        return response.data.todos as ITodo;
    },
    async updateById(id: number, data: Partial<ITodoWithoutId>) {
        await api.put(`/todos/${id}`, data);

        return;
    },
    async deleteById(id: number) {
        await api.delete(`/todos/${id}`);

        return;
    }
}