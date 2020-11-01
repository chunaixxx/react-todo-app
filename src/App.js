import React, { useState, useEffect } from "react";
import './styles/App.css';

import Container from '@material-ui/core/Container';

import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import TodoSwitcher from './components/TodoSwitcher/TodoSwitcher';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

const App = () => {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
	const [todosCount, setTodosCount] = useState(JSON.parse(localStorage.getItem('todosCount')) || 0);
	const [newTodo, setNewTodo] = useState({});

	const [filterOptions, setFilterOptions] = useState({
		done: false,
		important: false
	});

	const toggleImportantSwitcher = () => setFilterOptions({
		done: filterOptions.done,
		important: !filterOptions.important
	});

	const toggleDoneSwitcher = () => setFilterOptions({
		done: !filterOptions.done,
		important: filterOptions.important
	});

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
	const removeTodo = id => setTodos(todos.filter(el => el.id !== id))

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
		<Container maxWidth='md'> 
			<main className='main'>
				<div className='main__inner'>
					<div className='main__title-container'>
						<h1 className='main__title'>Мой список задач</h1>

						<div className='main__help'>
							<Tooltip title={
									<>
										<h3>Горячие клавиши:</h3>
										<div>Enter - добавить задачу в список</div>
									</>
								}
							>
								<HelpOutlineIcon fontSize='small' />
							</Tooltip>
						</div>
					</div>

					<TodoSwitcher 
						toggleImportantSwitcher={() => toggleImportantSwitcher()}
						toggleDoneSwitcher={() => toggleDoneSwitcher()}
						filterTodos={() => filterTodos()}
					/>
				</div>

				<TodoForm addTodo={(textAreaValue) => addTodo(textAreaValue)}/>
				<TodoList 
					todos={ todos }
					newTodo= { newTodo }

					removeTodo={ id => removeTodo(id) }
					toggleItemStar={ id => toggleItemStar(id) }
					toggleItemDone={ id => toggleItemDone(id) }
					
					filterOptions={ filterOptions }
				/>
			</main>
		</Container>
	)
}

export default App;

