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
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	list: {
		width: '100%',
		marginTop: '25px'
	},
	list__item: {
		display: 'flex',
		justifityContent: 'spaceBetween',
		padding: '0px'
	},
	list__star: {
		color: '#ffd847',
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
							<Checkbox
								checked={item.done ? true : false}
								onChange={ () => props.handleClickStar(item.id) }
								icon={ <StarBorderIcon / > }
								checkedIcon={ <StarIcon className={ classes.list__star } /> }
							/>


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

