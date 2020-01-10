import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      backgroundSize: "cover",
      height: 600
    },
    headerText: {
      color: "30",
      fontWeight: "bolder",
      color: "#fff",
      fontFamily: "Helvetica Neue"
    },
    headerSubText: {
      color: "15",
      fontWeight: "normal",
      color: "#fff",
      fontFamily: "Helvetica Neue"
    }
  }));

const Header = () => {
    const classes = useStyles();
    return (
      <div className={classes.heroContent} style={{ backgroundImage: `url('/img/LandingPageImage.jpg')`}}>
        <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" className={classes.headerText} gutterBottom>
            Find Your Perfect Safari
        </Typography>
        <Typography variant="h5" align="center" className={classes.headerSubText} paragraph>
            Book incredvible safaris around africa
        </Typography>
        </Container>
        </div>
    );
}

export default Header;
