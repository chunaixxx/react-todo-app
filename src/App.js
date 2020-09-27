import React, { useState, useRef } from "react";
import './styles/App.css';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
	form: {
		marginTop: '15px'
	},

	form__textarea: {
		width: '400px'
	},

	form__submit: {
		margin: '10px 0 0 10px',
		backgroundColor: '#4caf50',
		color: '#fff',

		'&:hover': {
			backgroundColor: '#81c784',
		}
	},

	listItem: {
		textAlign: 'center'
	}
}));

const App = () => {
	const classes = useStyles();

	const [todos, setTodos] = useState([])
	const [textAreaValue, setTextAreaValue] = useState('');

	const handleChangeTextField = e => {
		setTextAreaValue(e.target.value);
	}

	const addTodo = () => {
		setTodos(prevState => [...prevState, {id: prevState.length + 1, text: textAreaValue}]);
		setTextAreaValue('');
	}

	return (
		<main className="main">
			<h1 className="main__title">TODO</h1>

			<form className={classes.form} noValidate autoComplete="off">
				<TextField value={textAreaValue} onChange={handleChangeTextField} className={classes.form__textarea} id="standard-basic" label="TODO" />
				<Button         
					variant="contained"
					className={classes.form__submit}
					onClick={() => addTodo()}
				>
					Добавить
				</Button>
			</form>

			<List>
				{
					todos.map(item =>                
						(
							<ListItem key={item.id} className={classes.listItem}>
								<ListItemText
									primary={item.text}
								/>
							</ListItem>
						)
					)
				}
            </List>
		</main>
	)
}

export default App;

