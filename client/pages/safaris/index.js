import React from 'react'
import Head from 'next/head'
import Nav from '../../components/nav'

import Header from '../../components/safaris/safarisHeader'
import SafariList from '../../components/safaris/safarisList'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 40,
  },
  copyright: {
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(6),
  }
}));

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.copyright}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Msafiri.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Home = () => {
  const classes = useStyles();
  return (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />
    <Header />
    <main>
      <Container className={classes.container} maxWidth="md">
        <div style={{flexGrow: "1"}}>
          <Grid container spacing={3}>
            <SafariList />
          </Grid>
        </div>
      </Container>
    </main>
    <Container maxWidth="md">
        <Copyright />
     </Container>
  </div>
  )
}

export default Home
