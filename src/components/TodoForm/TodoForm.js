import React, { useState, useRef, useEffect } from "react";

import './TodoForm.css';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// Material UI CSS
const useStyles = makeStyles((theme) => ({
	form__submit: {
		margin: '10px 0 0 10px',
		backgroundColor: '#4caf50',
		color: '#fff',

		'&:hover': {
			backgroundColor: '#81c784',
		}
	},
}));

let TodoForm = props => {
	const classes = useStyles();

	const [textAreaValue, setTextAreaValue] = useState('');
	const [textAreaWarn, setTextAreaWarn] = useState(false);
	const [textAreaMax] = useState(80);

	const formWarnRef = useRef(null);
	const textAreaRef = useRef(null);

	const handleChangeTextField = () => {
		const inputEl = document.querySelector('.MuiInputBase-input.MuiInput-input');

		if (inputEl.value.length <= textAreaMax) {
			setTextAreaValue(inputEl.value);
			if (textAreaWarn) removeWarn();
		} else {
			displayWarn();
		}
	}

	const displayWarn = () => {
		if (textAreaWarn == false) {
			setTextAreaWarn(true);
			formWarnRef.current.classList.add('form__warn_active');
		}

	}

	const removeWarn = () => {
		if (textAreaWarn) {
			setTextAreaWarn(false);
			formWarnRef.current.classList.remove('form__warn_active')
		}
	}

	const handleNewTodo = () => {
		props.addTodo(textAreaValue);
		removeWarn();
		setTextAreaValue('');
	}

	const handleKeyPress = e => {
		removeWarn();
		if (e.key === "Enter") handleNewTodo();
	}

	return (
		<form className={ 'form' } onSubmit={e => e.preventDefault()} noValidate autoComplete="off">
			<div className={ 'form__inner' } >
				<TextField
					ref={ textAreaRef }

					value={textAreaValue} 
					onChange={() => {
						handleChangeTextField();
					}} 
					id="standard-basic"
					label="Задача"
					onKeyPress={handleKeyPress}

					className="form__textarea"
				/>

				<Button         
					variant="contained"
					className={ classes.form__submit}
					onClick={() => handleNewTodo() }
				>
					Добавить
				</Button>
			</div>

	<div ref={ formWarnRef }  className={ 'form__warn' }>Максимальная длина задачи { textAreaMax } символов</div>
		</form>
	)
}

export default TodoForm;