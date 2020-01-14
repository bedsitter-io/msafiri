import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    heroContent: {
      marginTop: 60,
      backgroundColor: "#000",
      padding: theme.spacing(8, 0, 6),
      backgroundSize: "cover",
      width: "100%"
    },
    headerText: {
      fontWeight: "bolder",
      color: "#fff",
      fontFamily: "Helvetica Neue",
      paddingLeft: 30
    },
    headerSubText: {
      color: "15",
      fontWeight: "normal",
      color: "#fff",
      fontFamily: "Helvetica Neue",
      paddingLeft: 30
    },
    button: {
        color: "#fff",
        border: "1px solid #fff"
    },
    input: {
        color: "#fff",
        border: "1px solid #fff",
        width: "100%"
    }
  }));

const Subscribe = () => {
    const classes = useStyles();
    return (
      <div className={classes.heroContent}>
        <Grid container direction="row"
                justify="center"
                alignItems="center">
            <Grid>
                <Typography component="h1" variant="h2" align="center" className={classes.headerText} gutterBottom>
                    Get Updates & More
                </Typography>
                <Typography variant="h5" align="center" className={classes.headerSubText} paragraph>
                    Thoughtful thoughts to your inbox
                </Typography>            
            </Grid>
            <Grid 
                container
                item
                direction="row"
                justify="center"
                alignItems="center">
                <Grid>
                    <TextField placeholder="Your Email" className={classes.input} />
                </Grid>
                <Grid>
                    <Button variant="outlined" className={classes.button}>Apply as an operator</Button>
                </Grid>
            </Grid>
        </Grid>
        </div>
    );
}

export default Subscribe;
