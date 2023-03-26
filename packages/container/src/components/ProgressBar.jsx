import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>
	createStyles({
		bar: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			alignContent: 'center',
			flexWrap: 'wrap',
			paddingTop: theme.spacing(20),
			'& > * + *': {
				marginTop: theme.spacing(2),
			},
		},
		spinner: {
			width: '144px !important',
			height: '144px !important',
		},
		typoTop: {
			marginTop: '16px !important',
		},
	}),
);

export default () => {
	const classes = useStyles();

	return (
		<div className={classes.bar}>
			<CircularProgress className={classes.spinner} />
			<Typography component='h1' variant='h5' className={classes.typoTop}>
				Loading...
			</Typography>
		</div>
	);
};
