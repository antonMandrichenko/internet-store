import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";
import Grid from "@material-ui/core/Grid";
import Footer from "../../Containers/Layouts/Footer";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function AboutUs({classes}) {

  const delivery = [
    {
      title: 'Where can you deliver FreeShop?',
      text: 'We deliver our beer all over Ukraine by “Nova Poshta” delivery company. We do not send beer abroad for the time being.'
    },
    {
      title: 'How much does delivery cost?',
      text: 'The cost is calculated on “Nova Poshta” rates. Free delivery on ordering “Pravda” beer from 750 uah. Min - 200 uah.'
    },
    {
      title: 'How long should I wait for FreeShop delivery?',
      text: 'Delivery time depends on a location. For example, our beer will arrive in Kyiv the next day after placing an order, to Kharkiv - in 24 hours. You can find exact delivery time at “Nova Poshta” website.'
    },
    {
      title: 'Can I mix different products in one order?',
      text: 'Yes. You can order different products in one order.'
    },
    {
      title: 'How do I contact you for any order or information?',
      text: 'Please contact FreeShop via phone +380 98 516 04 36 or via email: aaaaaaaaaa@aaaaa.com.ua'
    },
    {
      title: 'Do you have an international delivery?',
      text: 'Unfortunately, no. We deliver products within Ukraine.'
    },
  ];

  const about = [
    {
      title: 'City',
      text: 'KIYV'
    },
    {
      title: 'Address',
      text: 'KIYV, 123 SCHEVCHENKO SQUARE'
    },
    {
      title: 'Opening hours:',
      text: 'MON-SUN 9:00 - 18:00'
    },
    {
      title: 'Phone:',
      text: '+380 98 516 4986436'
    },
    {
      title: 'Delivery:',
      text: '+380 98 516 4986436'
    },
    {
      title: 'For questions and suggestions:',
      text: 'antonMandryhenko@gmail.com'
    },
  ];

  return (
    <Fragment>
      <Grid container className={classes.grid} spacing={16}>
        <Grid item md={6} xs={12}>
          <Typography variant="h5" className={classes.title}>Delivery</Typography>
          {
            delivery.map((item) =>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>{item.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    {item.text}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>)
          }
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography variant="h5" className={classes.title}>Contacts</Typography>
          {
            about.map((item) =>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>{item.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    {item.text}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>)
          }
        </Grid>
        <Grid item xs={12}>
          <Footer/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default withStyles(styles)(AboutUs) ;
