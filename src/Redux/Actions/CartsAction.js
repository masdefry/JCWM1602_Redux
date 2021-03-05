export const updateDataCarts = (totalCarts) => {
    console.log(totalCarts)
    return{
        type: 'UPDATE_TOTALCARTS',
        payload: totalCarts
    }
}