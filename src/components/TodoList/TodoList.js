import React, { useState } from "react";

import TodoListItem from './TodoListItem/TodoListItem';
import './TodoList.css';

const TodoList = props => {
	const [ isAnimated, setIsAnimated ]= useState(false);

	const todoDeleteAnimation = (el, id) => {
		// Проверяем анимирован ли список
		if (!isAnimated) {
			setIsAnimated(true);

			// Добавляем задаче класс с анимацией
			el.classList.add('list__item_animated');
			
			// Удаляем задачу после завершения анимации и говорим, что список больше не анимирован
			setTimeout(() => {
				props.removeTodo(id);
				setIsAnimated(false);
			}, 300);
		}		
	}

	return (					
		<ul className={ 'list' }>
			{
				props.todos.map(todo =>                
					(
						<TodoListItem 
							key={ todo.id }

							item={ todo }
							toggleItemStar={ () => props.toggleItemStar(todo.id) }
							toggleItemDone={ () => props.toggleItemDone(todo.id) }	
							todoDeleteAnimation={ el => todoDeleteAnimation(el, todo.id)  }
						/>
					)
				)
			}
			
		</ul>
	)
}

export default TodoList;

