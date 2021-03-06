import React, { useRef, useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import './TodoListItem.css';


import Checkbox from '@material-ui/core/Checkbox';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import DeleteIcon from '@material-ui/icons/Delete';

import IconButton from '@material-ui/core/IconButton';

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


const TodoListItem = props => {
	const classes = useStyles();

	const todoRef = useRef(null);
	const todoTextRef = useRef(null);

	const handleClickDone = id => {
		todoTextRef.current.classList.toggle('list__text_done');
		props.toggleItemDone(id);
	}

	const { id, text, done, important } = props.item;
	return (
		<li className={'list__item'} ref={ todoRef } >
			<div 
				className={ done ? 'list__text list__text_done' : 'list__text'} 
				ref={ todoTextRef }
			> 
				{ text } 
			</div>

			<div className={ 'list__container' }>
				<Checkbox
					className={ classes.list__done }
					checked={done ? true : false}
					onChange={ () => handleClickDone(id) }
					color='default'
				/>

				<Checkbox
					className={ classes.list__importantCheckbox }
					color='default'
					checked={important ? true : false}
					onChange={ () => props.toggleItemStar(id) }
					icon={ <StarBorderIcon className={ classes.list__importantIcon } /> }
					checkedIcon={ <StarIcon className={ classes.list__importantIcon_checked } /> }
				/>

				<IconButton 
					className={ classes.list__delete }
					onClick={ () => props.removeTodo() }
				>
					<DeleteIcon />
				</IconButton>
			</div>
		</li>
	)
}

export default TodoListItem