import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

Delivery.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = () => ({
  card: {
    marginTop: '1rem',
  },
});

const rows = [
  'Delivery time depends on a location. For example, our beer will arrive in Kyiv the next day after placing an order, to Kharkiv - in 24 hours. You can find exact delivery time at “Nova Poshta” website.',
  'You can order different products in one order.',
  'You can find exact delivery time at “Nova Poshta” website.',
];

function Delivery({classes}) {
  return (
    <Card className={classes.card}>
      <List>
        {rows.map((row) =>
          <Fragment key={row}>
            <ListItem>
              <ListItemText
                primary={row}
              />
            </ListItem>
            <Divider/>
          </Fragment>
        )}
      </List>
    </Card>
  );
}

export default withStyles(styles)(Delivery);
