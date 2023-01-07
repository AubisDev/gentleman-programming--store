import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from "@mui/material"
import { Cart, Product } from "../models"
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from "../redux/state/shoppingCart";
import { AppStore } from "../redux/store";
import { addItemToCart, checkItemExistency, updateCartItemAmount } from "../utilities/cart.utilities";

export const ProductItem = (product: Cart) => {
  const {image, price, title, id} = product;
  const dispatch = useDispatch();
  const cartState = useSelector( (store: AppStore) => store.cart);

  const handleClick = () => {
    let isItemInCart = checkItemExistency(cartState, id);
    //dispatch( addCartItem())
    if( isItemInCart) updateCartItemAmount(cartState, id) 
    dispatch( addCartItem(addItemToCart(cartState, product)))
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
      <Card sx={{ maxWidth: 300,  height:375, p:1, display:'flex', flexDirection:'column', justifyContent:"space-evenly" }} >
        <CardMedia
          component="img"
          sx={{ height: '50%', objectFit:'contain' }}
          src={image}
          title={title}
        />
        <CardContent sx={{height:"30%", dispay:"flex", alignItems:"center", justifyContent:"center"}}>
          <Typography gutterBottom variant="subtitle1" component="div">
              {title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div" >
            ${price} 
          </Typography>
        </CardContent>
        <CardActions>
        <Button variant="contained" color="secondary" fullWidth size="small" onClick={handleClick}>Add to cart</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
export default ProductItem