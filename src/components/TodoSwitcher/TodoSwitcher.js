import React from "react";

import './TodoSwitcher.css';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import Switch from '@material-ui/core/Switch';
import CheckBoxIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarIcon from '@material-ui/icons/Star';
import Tooltip from '@material-ui/core/Tooltip';

const TodoSwitcher = props =>
	(
		<div className={ 'switchers' }>
			<div className={ 'switcher' }>
				<Tooltip title='Показать невыполненные'>
					<FormControlLabel
							label={
								<div className={ 'switcher__container_done' }>
									<CheckBoxIcon />
								</div>
							}

							control={
								<Switch 
									onClick={() => props.toggleDoneSwitcher()}
									color="default"
								/>
							}

							labelPlacement='start'
					/>
				</Tooltip>
			</div>

			<div className={ 'switcher' }>
				<Tooltip title='Показать важные'>
					<FormControlLabel
							label={
								<div className={ 'switcher__container_star' }>
									<StarIcon />
								</div>
							}

							control={
								<Switch 
									onClick={() => props.toggleImportantSwitcher()}
									color="default"
								/>
							}

							labelPlacement='start'
					/>
				</Tooltip>
			</div>
		</div>		
	)

export default TodoSwitcher;