import React, { Fragment } from 'react';
import PropTypes from "prop-types";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import {compose} from "redux";
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';
import CircularIndeterminate from "../../../Components/Circular";
import Typography from "@material-ui/core/Typography";
import { mapStateToProps } from "./redux";


SimpleLineChart.propTypes = {
  orders: PropTypes.any,
};

function SimpleLineChart({orders}) {

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom>
       Total sales
      </Typography>
      {
        orders
          ?  <ResponsiveContainer width="90%" height={500}>
            <LineChart data={orders}>
              <XAxis dataKey="orderedAt" />
              <YAxis />
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="totalAmount" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
          : <CircularIndeterminate/>
      }
    </Fragment>
  );
}

export default compose(
  firestoreConnect([
    {collection: 'orders'}
  ]),
  connect(mapStateToProps)
)(SimpleLineChart);

