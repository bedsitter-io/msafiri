import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
      backgroundSize: "cover",
      height: 200
    },
    headerText: {
      color: "30",
      fontWeight: "bolder",
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
            Safaris
        </Typography>
        </Container>
        </div>
    );
}

export default Header;
