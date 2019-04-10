import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";


const styles = theme => ({
  card: {
    maxWidth: 400,
    height: 200,
    width: 200
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
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

});

class Good extends React.Component {

  clickHandler = (e) => {
    if(e.target.innerHTML === 'Add to basket') return;
    console.dir(e.target)
  };

  render() {
    const { good, addGoodsInBasket } = this.props;

    return (
      <Card style={styles.card} onClick={this.clickHandler}>
        <Link to={`/product/${good.product.id}`}>
          <CardMedia style={{height: 300, width: 'auto'}}
            image={good.product.images[0].url}
            title={good.product.name}
            component='img'
          />
          <CardContent>
            <Typography variant="h4">
              {good.product.name}
            </Typography>
            <Typography variant="h6">
              <span>Price: {good.product.price}</span>
            </Typography>
          </CardContent>
        </Link>
        <CardActions
          disableActionSpacing
          onClick={addGoodsInBasket.bind(this, good)}
        >
          <Button size="small">Add to basket</Button>
        </CardActions>
      </Card>
    );
  }
}

Good.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Good);


