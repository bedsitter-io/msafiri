import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(4),
    },
    text: {
      fontWeight: "normal",
      fontSize: 17
    },
    help: {
      borderLeft: "4px solid #000",
      paddingLeft: 10
    }
  }));

const Footer = () => {
    const classes = useStyles();
    return (
    <footer className={classes.footer}>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
    <Grid>
          <Typography variant="h6" align="center" gutterBottom>
            Need Help?
          </Typography>
          <hr/>
          <div className={classes.help}>
          <Typography variant="h6">
            Call Us
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.text}>
            +25470123456
          </Typography>
          </div>
          <div className={classes.help}>
          <Typography variant="h6">
            Email Us
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.text}>
            support@msafiri.com
          </Typography>
          </div>
    </Grid>
    <Grid>
          <Typography variant="h6" align="center" gutterBottom>
            Company
          </Typography>
          <hr/>
          <Typography variant="h6" className={classes.text}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.text}>
            About Us
          </Typography>
          <Typography variant="h6" className={classes.text}>
            Our Operators
          </Typography>
          <Typography variant="h6" align="center" gutterBottom className={classes.text}>
            Our Hotels & Lodges
          </Typography>
    </Grid>
    <Grid>
          <Typography variant="h6" align="center" gutterBottom>
            Connect
          </Typography>
          <hr/>       
          <Typography variant="h6" className={classes.text}>
            Facebook
          </Typography>        
          <Typography variant="h6" className={classes.text}>
            Twitter
          </Typography>
          <Typography variant="h6" className={classes.text}>
            Instagram
          </Typography>
          <Typography variant="h6" align="center" gutterBottom className={classes.text}>
            Contact Us
          </Typography>
    </Grid>
    <Grid>
          <Typography variant="h6" align="center" gutterBottom>
            Operators
          </Typography>
          <hr/>
          <Typography variant="h6" className={classes.text}>
            Apply as an Operator
          </Typography>
          <Typography variant="h6" className={classes.text}>
            Vetting Guidelines
          </Typography>
    </Grid>
    </Grid>
    </footer>
    );
}

export default Footer;
