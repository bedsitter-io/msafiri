import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({    
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));

const Destinations = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={8}>
            <Paper className={classes.paper} style={{ backgroundImage: `url('/img/LandingPageImage.jpg')`, height: "350px"}}>Kenya</Paper>
            </Grid>
            <Grid item xs>
            <Paper className={classes.paper} style={{ backgroundImage: `url('/img/LandingPageImage.jpg')`, height: "350px"}}>Uganda</Paper>
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs>
            <Paper className={classes.paper} style={{ backgroundImage: `url('/img/LandingPageImage.jpg')`, height: "350px"}}>Tanzania</Paper>
            </Grid>
            <Grid item xs>
            <Paper className={classes.paper} style={{ backgroundImage: `url('/img/LandingPageImage.jpg')`, height: "350px"}}>Zanzibar</Paper>
            </Grid>
            <Grid item xs>
            <Paper className={classes.paper} style={{ backgroundImage: `url('/img/LandingPageImage.jpg')`, height: "350px"}}>Rwanda</Paper>
            </Grid>
        </Grid>
    </div>

    );
}

export default Destinations;