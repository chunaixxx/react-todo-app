import React, { useState, useRef, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';

import Switch from '@material-ui/core/Switch';
import StarIcon from '@material-ui/icons/Star';

import './TodoSwitcher.css';

// Material UI CSS
const useStyles = makeStyles((theme) => ({
	switcher__done: {
		'&.Mui-checked': {
			color: '#4caf50',
		}
	},
	switcher__star: {
		color: '#ffd847'
	}
}));

let TodoSwitcher = props => {
	const classes = useStyles();

	return (
		<div className={ 'switchers' }>
			<div className={ 'switcher' }>
				<div className={ 'switcher__container' }>
					<Checkbox
						className={ classes.switcher__done }
						checked={ true }
						color='default'
					/>
				</div>
				<Switch 
					onClick={() => props.toggleDoneSwitcher()}
					color="default"
				/>
			</div>
			<div className={ 'switcher' }>
				<div className={ 'switcher__container' }>
					<StarIcon className={ classes.switcher__star } />
				</div>
				<Switch 
					onClick={() => props.toggleImportantSwitcher()}
					color="default"
				/>
			</div>
		</div>		
	)
}

export default TodoSwitcher;