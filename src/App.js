import React, { useState, useEffect } from "react";
import './styles/App.css';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Container from '@material-ui/core/Container';

const App = () => {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
	const [todosCount, setTodosCount] = useState(JSON.parse(localStorage.getItem('todosCount')) || 0);
	const [newTodo, setNewTodo] = useState({});

	// Фиксировать новый TODO-список в кэше при каждом его обновлении
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
		localStorage.setItem('todosCount', JSON.stringify(todosCount));
	}, [todos]);

	// Добавить задачу
	const addTodo = textAreaValue => {
		if (!textAreaValue.length) return;

		setTodos(prevState => [ {id: todosCount, text: textAreaValue, important: false, done: false}, ...prevState ]);
		setTodosCount(prevState => prevState + 1);
		setNewTodo({id: todosCount, text: textAreaValue, important: false, done: false});
	}
	
	// Удалить задачу
	const removeTodo = id => {
		let todosNew = [...todos];

		todos.forEach((el, index) => {
			if (el.id == id) {
				todosNew.splice(index, 1);
			}
		})

		setTodos(todosNew);
	}

	// Зафиксировать изменение "звездочки" у задачи
	const toggleItemStar = id => {
		let todosNew = [...todos];

		todos.forEach((el, index) => {
			if (el.id == id) todosNew[index].important = !todosNew[index].important;
		})

		setTodos(todosNew);
	}

	// Зафиксировать изменение "выполнено" у задачи
	const toggleItemDone = id => {
		let todosNew = [...todos];

		todos.forEach((el, index) => {
			if (el.id == id) todosNew[index].done = !todosNew[index].done;
		})

		setTodos(todosNew);
	}

	return (
		<Container maxWidth="md">
			<main className="main" >
				<h1 className="main__title">Мой список задач</h1>

				<TodoForm addTodo={(textAreaValue) => addTodo(textAreaValue)}/>
				<TodoList todos={ todos }
						newTodo= { newTodo }
						removeTodo={ id => removeTodo(id) }
						toggleItemStar={ id => toggleItemStar(id) }
						toggleItemDone={ id => toggleItemDone(id) }
				/>
			</main>
		</Container>
	)
}

export default App;

