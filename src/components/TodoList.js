import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	list: {
		minWidth: '400px',
		marginTop: '25px'
	},
	list__item: {
		display: 'flex',
		justifityContent: 'spaceBetween'
	},
	list__delete: {
		backgroundColor: '#f44336',
		color: '#fff',

		marginLeft: '30px',

		'&:hover': {
			backgroundColor: '#d32f2f',
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
							<Button         
								variant="contained"
								onClick={ () => props.removeTodo(item.id) }
								className={ classes.list__delete }
							>DELETE</Button>
						</ListItem>
					)
				)
			}
		</List>
	)
}

export default TodoList;

