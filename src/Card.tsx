import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from './Link';

interface Props {
  title: string,
  classes: any,
  image: string,
  link: string
}

const SimpleCard: React.FC<Props> = ({children, ...props}) => {
  const { title, classes, image, link } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent className={classes.body}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="inherit">
          <Link href={link} color="inherit">Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;
