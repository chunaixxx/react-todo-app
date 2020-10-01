import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import DeleteIcon from '@material-ui/icons/Delete';

import IconButton from '@material-ui/core/IconButton';


import './TodoList.css';

// Material UI CSS
const useStyles = makeStyles((theme) => ({
	list__done: {
		'&.Mui-checked': {
			color: '#4caf50',
		}
	},
	list__importantCheckbox: {
		'&.Mui-checked': {
			color: '#ffd847',
		}
	},
	list__importantIcon_checked: {
		color: '#ffd847',
	},
	list__delete: {
		padding: '9px',
	},
}));

const TodoList = props => {
	const classes = useStyles();

	const [ isAnimated, setIsAnimated ]= useState(false);

	const handleClickDelete = id => {
		// Проверяем анимирован ли список
		if (!isAnimated) {
			setIsAnimated(true);

			// Добавляем задаче класс с анимацией
			const el = document.querySelector(`#list__item-${id}`);
			el.classList.add('list__item_animated');
			
			// Удаляем задачу после завершения анимации и говорим, что список больше не анимирован
			setTimeout(() => {
				props.removeTodo(id);
				setIsAnimated(false);
			}, 200);
		}
	}

	return (					
		<ul className={ 'list' }>
			{
				props.todos.map(item =>                
					(
						<li 
							key={ item.id } 
							className={'list__item'}
							id={ `list__item-${item.id}` }
						>
							<div className={ 'list__text' }> { item.text } </div>

							<div className={ 'list__container' }>
								<Checkbox
									className={ classes.list__done }
									checked={item.done ? true : false}
									onChange={ () => props.handleClickDone(item.id) }
									color='default'
								/>

								<Checkbox
									className={ classes.list__importantCheckbox }
									color='default'
									checked={item.important ? true : false}
									onChange={ () => props.handleClickStar(item.id) }
									icon={ <StarBorderIcon className={ classes.list__importantIcon } /> }
									checkedIcon={ <StarIcon className={ classes.list__importantIcon_checked } /> }
								/>

								<IconButton 
									className={ classes.list__delete }
									onClick={ () => handleClickDelete(item.id) }
								>
									<DeleteIcon />
								</IconButton>
							</div>
						</li>
					)
				)
			}
		</ul>
	)
}

export default TodoList;

