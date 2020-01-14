import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
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
    }
  }));

const BecomeExpert = () => {
    const classes = useStyles();
    return (
      <div className={classes.heroContent}>
        <Grid container spacing={3}>
            <Grid item xs={8}>
                <Typography component="h1" variant="h2" align="left" className={classes.headerText} gutterBottom>
                    Know your country or city?
                </Typography>
                <Typography variant="h5" align="left" className={classes.headerSubText} paragraph>
                    Join 20+ operators and 1000+ locals
                </Typography>            
            </Grid>
            <Grid 
                container
                item
                xs
                direction="row"
                alignItems="center">
                <Button variant="outlined" className={classes.button}>Apply as an operator</Button>
            </Grid>
        </Grid>
        </div>
    );
}

export default BecomeExpert;
