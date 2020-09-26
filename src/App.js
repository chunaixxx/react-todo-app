import React, { Component } from "react";
import './styles/App.css';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
}));

const App = () => {
	const classes = useStyles();

	return (
		<main className="main">
			<h1 className="main__title">TODO</h1>

			<form className={classes.form} noValidate autoComplete="off">
				<TextField className={classes.form__textarea} id="standard-basic" label="TODO" />
				<Button         
					variant="contained"
        			className={classes.form__submit}
				>
					Добавить
				</Button>
			</form>
		</main>
	)
}

export default App;

