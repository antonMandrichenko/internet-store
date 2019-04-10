import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Good from './good';

function Goods({addGoodsInBasket}) {

  const [goods, setGoods] = useState([]);

  useEffect(() => {
    fetch('./goods.json')
      .then(res => res.json())
      .then( body => setGoods(body))
  }, []);

    if(goods.length !== 0) {
      return (
            <Grid container spacing={16}>
              {goods.map((good) =>
                <Grid
                  item
                  key={good.id}
                  style={{height: 150}}
                >
                  <Good
                    good={good}
                    addGoodsInBasket={addGoodsInBasket}
                  />
                </Grid>
              )}
        </Grid>)
    } else {
     return <div>Loading...</div>
    }
}

export default Goods;
