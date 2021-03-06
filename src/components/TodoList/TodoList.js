import React, { useState, useEffect } from "react";

import TodoListItem from './TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = props => {
	const [ todosFiltered, setTodosFiltered ] = useState(props.todos);

	useEffect(() => {
		const {done, important } = props.filterOptions;
		const todos = props.todos;

		switch(true) {
			case done && important:
				setTodosFiltered(todos.filter(todo => !todo.done && !!todo.important));
				break;
			case done:
				setTodosFiltered(todos.filter(todo => !todo.done));
				break;
			case important:
				setTodosFiltered(todos.filter(todo => !!todo.important))
				break;
			default:
				setTodosFiltered(todos);
		}
	}, [props.filterOptions, props.todos])

	return (					
		<ul className={ 'list' }>
			{
				todosFiltered.map(todo =>                
					(
						<TodoListItem 
							key={ todo.id }

							newTodo={ props.newTodo.id == todo.id }
							item={ todo }

							toggleItemStar={ () => props.toggleItemStar(todo.id) }
							toggleItemDone={ () => props.toggleItemDone(todo.id) }	
							removeTodo={ () => props.removeTodo(todo.id) }
						/>
					)
				)
			}
			
		</ul>
	)
}

export default TodoList;

