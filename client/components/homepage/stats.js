import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PlaceIcon from '@material-ui/icons/Place';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import StoreIcon from '@material-ui/icons/Store';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({    
    root: {
        flexGrow: 1,
        borderBottom: "1px solid #000"
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: "none",
      },
      storeIcon: {
          fontSize: 60,
          color: "#000"
      },
      text: {
          padding: "0 10px",
          fontFamily: "Helvetica Neue",
          color: "#000"
      }
  }));

const Stats = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs>
            <Paper className={classes.paper}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    <Grid>   
                        <StoreIcon className={classes.storeIcon}/>
                    </Grid>
                    <Grid>
                        <Typography variant="h6" align="center" gutterBottom className={classes.text}>
                            20+ Local Operators        
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            </Grid>
            <Grid item xs>
            <Paper className={classes.paper}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    <Grid>   
                        <NaturePeopleIcon className={classes.storeIcon}/>
                    </Grid>
                    <Grid>
                        <Typography variant="h6" align="center" gutterBottom className={classes.text}>
                            100+ Handcrafted Experiences       
                        </Typography>
                    </Grid>
                </Grid>            
            </Paper>
            </Grid>
            <Grid item xs>
            <Paper className={classes.paper}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    <Grid>   
                        <PlaceIcon className={classes.storeIcon}/>
                    </Grid>
                    <Grid>
                        <Typography variant="h6" align="center" gutterBottom className={classes.text}>
                            50+ Destinations       
                        </Typography>
                    </Grid>
                </Grid>            
            </Paper>
            </Grid>
        </Grid>
        </div>
    );
}

export default Stats;