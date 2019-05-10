import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './style';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import CircleChoise from '../CircleChoise';
import { getCoords } from "../../../utils/getCoords";

InnerPriceChoise.propTypes = {
  classes: PropTypes.object.isRequired,
};

const indexSq = 0.5 / 14 * 100;

function InnerPriceChoise({ classes }) {

  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(700);
  const [leftMin, setLeftMin] = useState(0);
  const [leftMax, setLeftMax] = useState(100);
  const [koefLeft, setKoefLeft] = useState(minValue / 100);
  const [koefRight, setKoefRight] = useState(maxValue / 100);
  const [delta, setDelta] = useState(0);
  const [parentWidth, setParentWidth] = useState('100%');

  useEffect(() => {
    setKoefRight(leftMax / 100)
    setKoefLeft(leftMin / 100)
  }, [leftMax, leftMin]);

  const handleGivePosition = (e, data) => {
    const parent = e.target.parentElement;
    const cursor = e.target;
    const cursorCoords = getCoords(cursor);
    const parentCoords = getCoords(parent);
    setDelta(e.pageX - cursorCoords.left);
    document.onmousemove = function (e) {

      const left = e.pageX - delta - parentCoords.left;
      const koef = left / parent.offsetWidth;
      if (data === 'left') {

        if (koef < 0) {
          setLeftMin(0);
          setMinValue(20);
        } else {
          if (koef >= koefRight) {
            // setDelta(0);
            setMinValue(maxValue);
            setLeftMin(koefRight * 100 - 3);
          } else {
            setMinValue((koef * (maxValue - minValue)).toFixed(0));
            setLeftMin(koef * 100);
          }
        }

      } else {
        if (koef > 1) {
          setLeftMax(100);
          setMaxValue(700);
        } else {
          if (koef <= koefLeft) {
            // setDelta(0);
            setLeftMax(koefLeft * 100 + 3);
            setMaxValue(minValue);
          } else {
            setMaxValue((koef * (maxValue - minValue)).toFixed(0));
            setLeftMax(koef * 100);
          }
        }
      }
    };
    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
    };
    e.preventDefault();
  };

  return (
    <form>
      <Grid
        container>
        <Grid
          item
          xs={5}>
          <TextField
            className={classNames(classes.textField, classes.flexCenter)}
            value={minValue}
            margin="normal"
            type="number"
            variant="outlined"
            inputProps={{
              min: '20',
              max: '700',
            }}

          />
        </Grid>
        <Grid
          item
          xs={2}
          className={classes.flexCenter}>
          -
        </Grid>
        <Grid
          item
          xs={5}>
          <TextField
            className={classes.textField}
            value={maxValue}
            margin="normal"
            variant="outlined"
            type="number"
            inputProps={{
              min: '20',
              max: '700',
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems={'center'}
        justify={'center'}
        className={classes.lineBox}>
        <div className={classes.line} >

          <div className={classes.colorLine}
          style={{
            left:`${leftMin - indexSq}%`,
            // width: `${leftMin - indexSq}%`,
            }}>
            <CircleChoise
              left={'' + leftMin - indexSq + '%'}
              handleGivePosition={handleGivePosition}
              data={'left'}
            // handleChangePosition={handleChangePosition}
            />
            <CircleChoise
              left={'' + leftMax - indexSq + '%'}
              handleGivePosition={handleGivePosition}
              data={'right'}
            // handleChangePosition={handleChangePosition}
            />
          </div>

        </div>
      </Grid>
    </form>
  );
}

export default withStyles(styles)(InnerPriceChoise);
