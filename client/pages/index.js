import React from 'react'
import Head from 'next/head'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Nav from '../components/nav'
import Header from '../components/homepage/homeHeader'
import Footer from '../components/homepage/homeFooter'
import SafariList from '../components/homepage/trendingList'
import Destinations from '../components/homepage/destinationsCards'
import TopOperator from '../components/homepage/topOperators'
import Stats from '../components/homepage/stats'
import ExperiencesList from '../components/homepage/topExperiences'
import BecomeExpert from '../components/homepage/becomeExpert';
import Subscribe from '../components/homepage/subscribe';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  h2: {
    paddingTop: 40,
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    fontSize: 35
  },
  copyright: {
    paddingBottom: theme.spacing(2),
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
  <>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body style={{overflow: 'auto', width: '100%', margin: 'auto'}}>
    <Nav />
    <Header />
    <main>
      <Stats />
      <Container maxWidth="md">
        <h2 className={classes.h2}>Trending Tours</h2>
        <div style={{flexGrow: "1"}}>
          <Grid container spacing={3}>
            <SafariList />
          </Grid>
        </div>
      </Container>
      <Container maxWidth="md">
        <h2 className={classes.h2}>Destinations</h2>
        <Destinations />
      </Container>
      <Container maxWidth="md">
        <h2 className={classes.h2}>Experiences You'll Love</h2>
        <div style={{flexGrow: "1"}}>
          <Grid container spacing={3}>
            <ExperiencesList />
          </Grid>
        </div>
      </Container>
      <Container maxWidth="md">
        <BecomeExpert />
      </Container>
      <Container maxWidth="md">
      <h2 className={classes.h2}>Top Operators</h2>
        <TopOperator />
      </Container>
      <Subscribe />
     </main>
     <Container maxWidth="md">
        <Footer />
        <Copyright />
     </Container>
     </body>
   </>
  );
}

export default Home
