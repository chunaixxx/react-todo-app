import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Checkbox from '@material-ui/core/Checkbox';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import DeleteIcon from '@material-ui/icons/Delete';

import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
	list: {
		width: '100%',
		marginTop: '25px'
	},
	list__item: {
		display: 'flex',
		justifityContent: 'spaceBetween',
		padding: '0px',
		backgroundColor: '#fff',
		marginBottom: '10px',
		padding: '5px 30px',
		boxShadow: '0 7px 14px rgba(0,0,0,0.1)',
	},
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
		transition: '.1s ease',
		padding: '9px',

		'&:hover': {
			color: '#f44336',
		}
	}
}));

const TodoList = props => {
	const classes = useStyles();

	return (
		<List className={ classes.list }>
			{
				props.todos.map(item =>                
					(
						<ListItem 
							key={ item.id } 
							className={ classes.list__item }
						>
							<ListItemText
								className={ classes.list__text }
								primary={ item.text } 
							/>
							<Checkbox
								className={ classes.list__done }
								checked={item.done ? true : false}
								onChange={ () => props.handleClickDone(item.id) }
							/>

							<Checkbox
								className={ classes.list__importantCheckbox }

								checked={item.important ? true : false}
								onChange={ () => props.handleClickStar(item.id) }
								icon={ <StarBorderIcon className={ classes.list__importantIcon } /> }
								checkedIcon={ <StarIcon className={ classes.list__importantIcon_checked } /> }
							/>

							<IconButton 
								onClick={ () => props.removeTodo(item.id) }
								className={ classes.list__delete }
							>
								<DeleteIcon />
							</IconButton>
						</ListItem>
					)
				)
			}
		</List>
	)
}

export default TodoList;

