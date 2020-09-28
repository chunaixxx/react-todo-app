import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import DeleteIcon from '@material-ui/icons/Delete';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	list: {
		minWidth: '400px',
		maxWidth: '800px',
		marginTop: '25px'
	},
	list__item: {
		display: 'flex',
		justifityContent: 'spaceBetween'
	},
	list__delete: {
		transition: '.1s ease',

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
							<ListItemText primary={item.text} />
								<IconButton 
									aria-label="delete"
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

