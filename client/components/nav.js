import React from 'react'
import Link from 'next/link'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  navbar :{
    width: "100%",
    position: "absolute",
    textAlign: "center",
    backgroundColor: "transparent"
  },
  menu: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuItem: {
    display: "flex",
    padding: "6px 8px"
  },
  item: {
    color: "#000",
    textDecoration: "none",
    fontSize: "13px",
    fontFamily: "Helvetica Neue"
    },
  logo: {
    color: "#000",
    textDecoration: "none",
    fontSize: "27px",
    fontWeight: "bolder",
    fontFamily: "Montserrat"
  }
}));

const links = [
  { href: '/safari', label: 'Safaris' },
  { href: '/#', label: 'Destinations' },
  { href: '/#', label: 'Hotels & Lodges' },
  { href: '/#', label: 'Login' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {
  const classes = useStyles();
return (
  <nav className={classes.navbar}>
  <Grid
  container
  direction="row"
  justify="space-between"
  alignItems="center"
>
      <Grid>
        <Link href="/">
          <a className={classes.logo}>Msafari</a>
        </Link>
        </Grid>
        <Grid>
    <ul className={classes.menu} >
      {links.map(({ key, href, label }) => (
        <li className={classes.menuItem}>
          <a className={classes.item} href={href}>{label}</a>
        </li>
      ))}
    </ul>
    </Grid>
    </Grid>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
    `}</style>
  </nav>
)}

export default Nav
