import { Box, ListItem, Divider, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Cart } from "../models";
import { useSelector, useDispatch } from 'react-redux';
import store, { AppStore } from '../redux/store';
import { deleteItem } from "../utilities";
import { removeCartItem } from "../redux/state/shoppingCart";

export const PinkText = styled(Box)({
    color:'#ec178c',
    paddingRight: 4,
    paddingLeft:4
})

const ItemDetail = styled(Box)({
    display:"flex", 
    flexDirection:"row",
    justifyContent:"center",
})

const CartItem = (item: Cart) => {
    const { title, price, image, amount, id } = item; 
    const cartState = useSelector( (store: AppStore) => store.cart);
    const dispatch = useDispatch();

    const handleRemoveClick = () => {
        const stateWithDeletedItem = deleteItem(cartState, item.id);
        dispatch(removeCartItem(stateWithDeletedItem));
    }

    return (
        <Box
        
        sx={{ width:{xs: 300, md:350, lg:450}, border:'1px solid lightgray', }}
        
        >
            <ListItem key={title+id} sx={{ width:"90%", margin:"auto"}} >
                <img src={image} alt={title} style={{ width:'50%', height: 125, objectFit:'contain',}}/>
                <Box sx={{ display:"flex", flexDirection:"column", padding:1,width:"50%"}}>
                    <Box sx={{ fontWeight: 600, textAlign:"center",pb:1}}>{title}</Box>
                    <Divider sx={{marginBottom:1}}/>
                    <ItemDetail sx={{display:'flex', alignItems:"center", fontSize:{xs:'15px', md:'16px'}}}><PinkText>Price: </PinkText>${price}</ItemDetail>
                    <ItemDetail sx={{ marginBottom:1, fontSize:{xs:'15px', md:'16px'}}}><PinkText>Amount: </PinkText>{amount}</ItemDetail>
                    <Button variant="contained" color="error" sx={{ mt:1, width:'100%', margin:'0 auto', ml:1, fontSize:{xs:'12px', md:'15px'}}} onClick={handleRemoveClick}>Remove item</Button>
                </Box>
            </ListItem>
            <Divider />
        </Box>
    );
}
export default CartItem

