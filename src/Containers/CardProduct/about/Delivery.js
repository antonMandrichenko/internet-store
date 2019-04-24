import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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
  'Доставка 1-2 рабочих дня в областные центры, 3-5 рабочих дней в удаленные населенные пункты Украины (села, пригороды и тд.)',
  'Гарантия 12 месяцев от фабрики. Товар едет напрямую с фабрики. Возврат/обмен в течении 14 дней.',
  'Оплата при получении, Visa/MasterCard, Приват24, Кредит, Рассрочка, Оплата частями, Безналичная',
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
