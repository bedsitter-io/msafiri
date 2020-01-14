import React from 'react'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FormatQuoteOutlinedIcon from '@material-ui/icons/FormatQuoteOutlined';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Safari = (props) =>   {
  const classes = useStyles();
    return (

      <>
            <Grid item 
                key={props.safari} 
                xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/img/travel.jpg"
                      title="Image title"
                    >
                        <IconButton aria-label="add to favorites"> 
                        <FavoriteBorderIcon />
                        {props.safari.likes.length} 
                      </IconButton>
                    </CardMedia>
                    
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {props.safari.title}                      
                      </Typography>
                      <Typography>
                      <FormatQuoteOutlinedIcon/>
                      {props.safari.description}...
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                      <Typography style={{marginLeft: 'auto'}}>
                        0 Reviews
                      </Typography>
                    </CardActions>
                  </Card>
              </Grid>
      </>
    )
  }

export default Safari