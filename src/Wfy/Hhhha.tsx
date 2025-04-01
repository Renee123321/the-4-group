import React, { useState } from 'react';

// 定义待办事项的类型
type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

// 定义 TodoList 组件
const TodoList: React.FC = () => {
    // 使用 useState 管理待办事项列表
    const [todos, setTodos] = useState<Todo[]>([]);
    // 使用 useState 管理输入框中的文本
    const [inputText, setInputText] = useState<string>('');
    // 使用 useState 管理当前的 ID，用于给每个待办事项赋予唯一标识
    const [currentId, setCurrentId] = useState<number>(1);

    // 添加待办事项的函数
    const addTodo = () => {
        if (inputText.trim() === '') return;
        const newTodo: Todo = {
            id: currentId,
            text: inputText,
            completed: false
        };
        setTodos([...todos, newTodo]);
        setInputText('');
        setCurrentId(currentId + 1);
    };

    // 删除待办事项的函数
    const deleteTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id!== id);
        setTodos(updatedTodos);
    };

    // 切换待办事项完成状态的函数
    const toggleComplete = (id: number) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id? { ...todo, completed:!todo.completed } : todo
        );
        setTodos(updatedTodos);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-cyan-500 to-blue-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 space-y-4 animate-fade-in">
                <h1 className="text-3xl font-bold text-center text-gray-800">待办事项列表</h1>
                <div className="flex mb-4">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="输入待办事项"
                        className="border border-gray-300 p-2 rounded-l flex-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                        onClick={addTodo}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r transition-colors duration-300"
                    >
                        添加
                    </button>
                </div>
                <ul className="space-y-2">
                    {todos.map(todo => (
                        <li
                            key={todo.id}
                            className={`flex items-center justify-between p-3 rounded-lg shadow-md ${todo.completed ? 'bg-green-100' : 'bg-white'} transition-all duration-300 hover:scale-105`}
                        >
                            <span
                                onClick={() => toggleComplete(todo.id)}
                                className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                            >
                                {todo.text}
                            </span>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded transition-colors duration-300"
                            >
                                删除
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
    