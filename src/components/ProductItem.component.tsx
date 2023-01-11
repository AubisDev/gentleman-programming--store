import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from "@mui/material"
import { Product } from "../models"
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, updateCartitem } from "../redux/state/shoppingCart";
import { AppStore } from "../redux/store";
import { checkItemExistency, createNewCartItem, updateItemAmount } from "../utilities";

export const ProductItem = (product: Product) => {
  const {image, price, title, id} = product;
  const dispatch = useDispatch();
  const cartState = useSelector( (store: AppStore) => store.cart);

  const handleClick = () => {
    let isItemInCart = checkItemExistency(cartState, id);
    if( isItemInCart) {
      const updatedItem = updateItemAmount(cartState, id);
      dispatch( updateCartitem(updatedItem));
    }
    else {
      const newCartItem = createNewCartItem(cartState, product);
      dispatch( addCartItem(newCartItem));
    }
    
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} display='grid' justifyContent={{xs:'center', md:'normal'}}>
      <Card className="productShadow" sx={{ maxWidth: 300,  height:345, p:1, display:'flex', flexDirection:'column', justifyContent:"space-between" }} >
        <CardMedia
          component="img"
          sx={{ height: '50%', objectFit:'contain' }}
          src={image}
          title={title}
        />
        <CardContent sx={{height:"30%", dispay:"flex", alignItems:"center", justifyContent:"center"}}>
          <Typography gutterBottom variant="subtitle1" component="div" fontFamily="PT sans" lineHeight='1.15em'>
              {title}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div" fontWeight={700} fontFamily="PT sans" fontStyle="italic" >
            ${price} 
          </Typography>
        </CardContent>
        <CardActions>
        <Button className="addBtn" variant="contained" color="secondary" fullWidth size="small" onClick={handleClick} sx={{background:"#ec178c"}}>Add to cart</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
export default ProductItem