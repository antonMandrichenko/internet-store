export const getCurrentProduct = product => ({
    type: 'GET_CURRENT_PRODUCT',
    product
});


export const noCurrentProduct = () => ({
    type: 'NO_CURRENT_PRODUCT',
});
