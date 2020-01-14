import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FormatQuoteOutlinedIcon from '@material-ui/icons/FormatQuoteOutlined';

const useStyles = makeStyles(theme => ({    
    root: {
        flexGrow: 1,
      },
      card: {
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
      insideCard: {
        display: 'flex',
        marginBottom: 20
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: 80,
      },
  }));

const TopOperators = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs>
            <Card className={classes.card}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    
                </Avatar>
                }
                title="Traverse Afrika"
                subheader={
                    <section>
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                    </section>
                }
            />
            <CardMedia
                className={classes.media}
                image="/img/LandingPageImage.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                <FormatQuoteOutlinedIcon />This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography component="h6" variant="h6">Top Safaris</Typography>
                <hr />
                <Card className={classes.insideCard}>                    
                    <CardMedia
                        className={classes.cover}
                        image="/img/Traveller.jpg"
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h6" variant="h6">
                            5 Days Mt Kenya
                        </Typography>
                        <section>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </section>
                        <Typography variant="subtitle1" color="textSecondary">
                            10 Reviews
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
                <Card className={classes.insideCard}>
                    <CardMedia
                        className={classes.cover}
                        image="/img/Traveller.jpg"
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Mombasa whitesands
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            10 Reviews
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
                <Card className={classes.insideCard}>
                    <CardMedia
                        className={classes.cover}
                        image="/img/Traveller.jpg"
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            10 Maasai Mara
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            10 Reviews
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
                </CardContent>
            </Collapse>
            </Card>  
            </Grid>
            <Grid item xs>
            <Card className={classes.card}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    
                </Avatar>
                }
                title="Traverse Afrika"
                subheader={
                    <section>
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                    </section>
                }
            />
            <CardMedia
                className={classes.media}
                image="/img/LandingPageImage.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                <FormatQuoteOutlinedIcon />This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography component="h6" variant="h6">Top Safaris</Typography>
                <hr />
                <Card className={classes.insideCard}>                    
                    <CardMedia
                        className={classes.cover}
                        image="/img/Traveller.jpg"
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h6" variant="h6">
                            5 Days Mt Kenya
                        </Typography>
                        <section>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </section>
                        <Typography variant="subtitle1" color="textSecondary">
                            10 Reviews
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
                <Card className={classes.insideCard}>
                    <CardMedia
                        className={classes.cover}
                        image="/img/Traveller.jpg"
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Mombasa whitesands
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            10 Reviews
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
                <Card className={classes.insideCard}>
                    <CardMedia
                        className={classes.cover}
                        image="/img/Traveller.jpg"
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            10 Maasai Mara
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            10 Reviews
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
                </CardContent>
            </Collapse>
            </Card>  
            </Grid>
            <Grid item xs>
            <Card className={classes.card}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    
                </Avatar>
                }
                title="Traverse Afrika"
                subheader={
                    <section>
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                    </section>
                }
            />
            <CardMedia
                className={classes.media}
                image="/img/LandingPageImage.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                <FormatQuoteOutlinedIcon />This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography component="h6" variant="h6">Top Safaris</Typography>
                <hr />
                <Card className={classes.insideCard}>                    
                    <CardMedia
                        className={classes.cover}
                        image="/img/Traveller.jpg"
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h6" variant="h6">
                            5 Days Mt Kenya
                        </Typography>
                        <section>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </section>
                        <Typography variant="subtitle1" color="textSecondary">
                            10 Reviews
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
                <Card className={classes.insideCard}>
                    <CardMedia
                        className={classes.cover}
                        image="/img/Traveller.jpg"
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            Mombasa whitesands
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            10 Reviews
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
                <Card className={classes.insideCard}>
                    <CardMedia
                        className={classes.cover}
                        image="/img/Traveller.jpg"
                        title="Live from space album cover"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            10 Maasai Mara
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            10 Reviews
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
                </CardContent>
            </Collapse>
            </Card>  
            </Grid>
        </Grid>
        </div>
    );
}

export default TopOperators;