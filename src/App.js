import React, { useState, useEffect } from "react";
import './styles/App.css';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

const App = () => {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
	const [todosCount, setTodosCount] = useState(JSON.parse(localStorage.getItem('todosCount')) || 0);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
		localStorage.setItem('todosCount', JSON.stringify(todosCount));
	}, [todos]);

	const addTodo = textAreaValue => {
		if (!textAreaValue.length) return;

		setTodos(prevState => [...prevState, {id: todosCount, text: textAreaValue, important: false, }]);
		setTodosCount(prevState => prevState + 1);
	}
		
	const removeTodo = id => {
		let todosNew = [...todos];

		todos.forEach((el, index) => {
			if (el.id == id) {
				todosNew.splice(index, 1);
			}
		})

		setTodos(todosNew);
	}

	const toggleItemStar = id => {
		let todosNew = [...todos];

		todos.forEach((el, index) => {
			if (el.id == id) todosNew[index].important = !todosNew[index].important;
		})

		setTodos(todosNew);
	}

	const toggleItemDone = id => {
		let todosNew = [...todos];

		todos.forEach((el, index) => {
			if (el.id == id) todosNew[index].done = !todosNew[index].done;
		})

		setTodos(todosNew);
	}

	return (
		<main className="main">
			<h1 className="main__title">TODO</h1>

			<TodoForm addTodo={(textAreaValue) => addTodo(textAreaValue)}/>
			<TodoList todos={ todos } 
					  removeTodo={ id => removeTodo(id) }
					  toggleItemStar={ id => toggleItemStar(id) }
					  toggleItemDone={ id => toggleItemDone(id) }
			/>
		</main>
	)
}

export default App;

