import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import RewiewInCard from "./RewiewInCard";
import AddReview from "./AddReview";

ViewRewiews.propTypes = {
  // classes: PropTypes.object.isRequired,
};

const rewiews = [
  {
    id: 1, user: 'Alibaba', text: 'Lorem lorem lorel lorem Lorem lorem lorel loremLorem lorem lorel loremLorem lorem' +
' lorel' +
      ' lorem Lorem lorem lorel lorem', rate: 2, positive: 'cool product', negative: 'no negative', date: '22.12.2018'
  },
  {
    id: 2, user: 'Lolay', text: 'Lorem lorem lorel lorem Lorem lorem lorel loremLorem lorem lorel loremLorem lorem' +
      ' lorel' +
      ' lorem Lorem lorem lorel lorem 2', rate: 3, positive: 'cool product 2', negative: 'no negative 2',  date: '22.12.2018'
  },
  {
    id: 3, user: 'Kattt', text: 'Lorem lorem lorel lorem Lorem lorem lorel loremLorem lorem lorel loremLorem lorem' +
      ' lorel' +
      ' lorem Lorem lorem lorel lorem 3', rate: null, positive: 'cool product 3', negative: 'no negative 3',  date: '22.12.2018'
  },
];

function ViewRewiews() {
  return (
    <Fragment>
      <Typography variant="h4" gutterBottom>
        Reviews of name of product
      </Typography>
      {rewiews.map((review) =>
        <RewiewInCard key={review.id} review={review}/>
      )}
      <AddReview/>

    </Fragment>
  );
}

export default ViewRewiews;
