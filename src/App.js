import React, { useState, useEffect } from "react";
import './styles/App.css';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
	const [todosCount, setTodosCount] = useState(JSON.parse(localStorage.getItem('todosCount')) || 0);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
		localStorage.setItem('todosCount', JSON.stringify(todosCount));
	});

	const addTodo = textAreaValue => {
		if (!textAreaValue.length) return;

		setTodos(prevState => [...prevState, {id: todosCount, text: textAreaValue, done: false}]);
		setTodosCount(prevState => prevState + 1);
	}
		
	const removeTodo = id => {
		let todosNew = [...todos];

		todos.forEach((el, index) => {
			if (el.id == id) todosNew.splice(index, 1);
		})

		setTodos(todosNew);
	}

	return (
		<main className="main">
			<h1 className="main__title">TODO</h1>

			<TodoForm addTodo={(textAreaValue) => addTodo(textAreaValue)}/>
			<TodoList todos={ todos } removeTodo={ id => removeTodo(id) }/>
		</main>
	)
}

export default App;

