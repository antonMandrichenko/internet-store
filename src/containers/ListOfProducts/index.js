import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {
  firestoreConnect,
  withFirebase,
} from "react-redux-firebase";
import Minicart from "../layouts/Minicart";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Pagination from "../../components/layouts/Pagination";
import CircularIndeterminate from '../../components/Circular'
import {styles} from "./style";
import {mapStateToProps, mapDispatchToProps} from "./redux";
import SortSelect from "../../components/SortSelect";


ListOfProducts.propTypes = {
  products: PropTypes.any,
  handleToOrFromCart: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  currentCategory: PropTypes.any,
  sortAlthabetic: PropTypes.func,
  sortProducts: PropTypes.array,
  sortPriceLow: PropTypes.func,
  sortPriceHigh: PropTypes.func,
  noSort: PropTypes.func,
};

function ListOfProducts({
                          products,
                          cart,
                          handleToOrFromCart,
                          currentCategory,
                          classes,
                          sortAlthabetic,
                          sortProducts,
                          sortPriceLow,
                          sortPriceHigh,
                          noSort,
                        }) {

  const [count] = useState(8);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [arrForRender, setArrForRender] = useState([]);
  const [isCategory, setIsCategory] = useState(false);
  let currCount = (currentPage - 1) * count;

  useEffect(() => {
    if (products) {
      setPages(Math.ceil(products.length / count));
      setArrForRender(products.slice(currCount, currCount + count));
      setIsCategory(false);
    }
  }, [products, currentPage]);

  useEffect(() => {
    if (currentCategory) {
      setArrForRender(products.filter((product) =>
        product.category === currentCategory));
      setIsCategory(true);
    }
  }, [products, currentCategory]);

  useEffect(() => {
    if (sortProducts) {
      setArrForRender(sortProducts.slice(currCount, currCount + count));
      setIsCategory(false);
    }
  }, [sortProducts, currentPage]);

  const handleChangePage = (e) => {
    setCurrentPage(+e.target.innerHTML);
  };

  const handleSortProducts = (name) => {
    if(name === "Alphabetically")
      sortAlthabetic(products);
    if(name === "low")
      sortPriceLow(products);
    if(name === "high")
      sortPriceHigh(products);
    if(name === "none")
      noSort(products);
  };

  return (
    <Grid
      container
      spacing={16}>
      <Grid
        item
        xs={12}
        md={!currentCategory
          ? 9
          : 12}>
        <Typography
          variant="h6">
          {!currentCategory
            ? 'All products'
            : `Products of ${currentCategory}`}
        </Typography>
      </Grid>
      {
        !currentCategory
          ? <Grid
              item
              xs={12}
              md={3}>
              <SortSelect
                sortProducts={handleSortProducts}
              />
            </Grid>
          : null
      }
      {
        products
        && arrForRender.length !== 0
        || (isCategory && currentCategory)
            ? arrForRender.map((product) => {
              let isInCart = false;
              cart.forEach((productInCart) => {
                if (productInCart.id === product.id)
                  isInCart = true;
              });
              return <Grid
                key={product.name}
                item
                lg={3}
                md={4}
                sm={6}
                xs={12}>
                <div className={classes.wrapper}>
                  <Minicart
                    product={product}
                    handleToOrFromCart={handleToOrFromCart}
                    isInCart={isInCart}
                  />
                </div>
              </Grid>
            })
          : <CircularIndeterminate/>
      }
      <Grid item xs={12}>
        {
          products && !currentCategory
            ? <div className={classes.pagination}>
              {
                new Array(pages).fill(0).map((item, ind) =>
                  <Pagination
                    key={ind}
                    handleChangePage={handleChangePage}
                    index={ind + 1}
                    currentPage={currentPage}
                  />)
              }
                </div>
            : null
        }
      </Grid>
    </Grid>
  );
}

export default compose(
  withFirebase,
  firestoreConnect([
    {collection: 'products'}
  ]),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(ListOfProducts);
