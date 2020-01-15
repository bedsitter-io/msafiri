import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({    
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      headerText: {
          marginTop: "20%"
      },
      text: {
        marginTop: "45%"
    }
  }));

const Destinations = () => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={8}>
            <Paper className={classes.paper} style={{ backgroundImage: `url('/img/LandingPageImage.jpg')`, height: "350px"}}>
            <Typography component="h1" variant="h2" align="center" className={classes.headerText} gutterBottom>
            Kenya
        </Typography>
        <Typography variant="h5" align="center" className={classes.headerSubText} paragraph>
            8 Safaris
        </Typography>
            </Paper>
            </Grid>
            <Grid item xs>
            <Paper className={classes.paper} style={{ backgroundImage: `url('/img/LandingPageImage.jpg')`, height: "350px"}}>
            <Typography component="h1" variant="h2" align="center" className={classes.text} gutterBottom>
            Uganda
        </Typography>
        <Typography variant="h5" align="center" className={classes.headerSubText} paragraph>
            8 Safaris
        </Typography>
            </Paper>
            </Grid>
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs>
            <Paper className={classes.paper} style={{ backgroundImage: `url('/img/LandingPageImage.jpg')`, height: "350px"}}>
            <Typography component="h1" variant="h2" align="center" className={classes.text} gutterBottom>
            Tanzania
        </Typography>
        <Typography variant="h5" align="center" className={classes.headerSubText} paragraph>
            0 Safaris
        </Typography>
            </Paper>
            </Grid>
            <Grid item xs>
            <Paper className={classes.paper} style={{ backgroundImage: `url('/img/LandingPageImage.jpg')`, height: "350px"}}>
            <Typography component="h1" variant="h2" align="center" className={classes.text} gutterBottom>
            Zanzibar
        </Typography>
        <Typography variant="h5" align="center" className={classes.headerSubText} paragraph>
            8 Safaris
        </Typography>
            </Paper>
            </Grid>
            <Grid item xs>
            <Paper className={classes.paper} style={{ backgroundImage: `url('/img/LandingPageImage.jpg')`, height: "350px"}}>
            <Typography component="h1" variant="h2" align="center" className={classes.text} gutterBottom>
            Rwanda
        </Typography>
        <Typography variant="h5" align="center" className={classes.headerSubText} paragraph>
            8 Safaris
        </Typography>
            </Paper>
            </Grid>
        </Grid>
    </div>

    );
}

export default Destinations;