import React from 'react';
import {Switch, Route} from "react-router-dom";
import Layouts from './Components/Layouts'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';



const App = (props) => {
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    "palette": {
      "common": {
        "black": "rgba(212, 53, 53, 1)",
        "white": "#fff"
      },
      "background": {
        "paper": "rgba(255, 255, 255, 1)",
        "default": "rgba(255, 255, 255, 1)"
      },
      "primary": {
        "light": "#79CBA0",
        "main": "rgba(73, 164, 61, 1)",
        "dark": "#51742E",
        "contrastText": "#fff"
      },
      "secondary": {
        "light": "#57CC8F",
        "main": "#396960",
        "dark": "#366438",
        "contrastText": "#fff"
      },
      "error": {
        "light": "#e57373",
        "main": "#f44336",
        "dark": "#57CC8F",
        "contrastText": "#fff"
      },
      "text": {
        "primary": "rgba(63, 57, 57, 0.87)",
        "secondary": "rgba(0, 0, 0, 0.54)",
        "disabled": "rgba(0, 0, 0, 0.38)",
        "hint": "rgba(0, 0, 0, 0.38)"
      }
    }
  });
  //
  // const addGoodsInBasket = (good) => {
  //   // this.setState({
  //   //   goodsInBasket: this.state.goodsInBasket.concat([good])
  //   // });
  //
  //   // if(this.state.goodsInBasket.length !== 0) {
  //   //   const len = this.state.goodsInBasket.reduce((newGoods, item, i) => {
  //   //     console.log(newGoods, item);
  //   //     // if(newGoods.length === 0) return [item];
  //   //     for(let i = 0; i < newGoods.length; i++) {
  //   //       if(newGoods[i].product.id === item.product.id) {
  //   //         if(newGoods.length !== 0)item.product.amount++;
  //   //         return newGoods
  //   //       } else {
  //   //         return [...newGoods, item]
  //   //       }
  //   //     }}, [this.state.goodsInBasket[0]]);
  //   //     console.log('arr', len);
  //   //   }
  // };
  //
  //  const deleteGoodsInBasket = (id) => {
  //   // console.log('id', id);
  //   // this.setState({
  //   //   goodsInBasket: this.state.goodsInBasket.filter(good => good.product.id !== id)
  //   // });
  //
  // };




    return (
      <MuiThemeProvider theme={theme}>
        <Layouts/>
      </MuiThemeProvider>
    );
};

export default App;
