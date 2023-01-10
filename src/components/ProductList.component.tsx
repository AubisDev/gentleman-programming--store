import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { ProductItem } from "./ProductItem.component";
import { v4 as uuidv4 } from 'uuid';

export const ProductList = () => {
  const productsState = useSelector( (store: AppStore) => store.products);


  return (
    <Grid container spacing={2}  sx={{ margin:"0 auto"}} width='90vw' pb={12} height="auto">
        {
          productsState.map( product => <ProductItem key={uuidv4()} {...product}/>)
        }
    </Grid>
  )
}
export default ProductList