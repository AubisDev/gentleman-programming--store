import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import Product from "./ProductItem.component";

export const ProductList = () => {
  const productsState = useSelector( (store: AppStore) => store.products);

  return (
    <Grid container spacing={2}  sx={{ margin:"0 auto"}} width='90vw'>
        {
          productsState.map( product => <Product key={ product.id} {...product}/>)
        }
    </Grid>
  )
}
export default ProductList