import { Button, Drawer, List, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../redux/store';
import { getTotalPrice } from '../utilities';
import CartItem, { PinkText } from './CartItem.component';
import { v4 as uuidv4 } from 'uuid';

const Title = styled(Typography)({
  textAlign:"center",
  fontWeight: 600,
  background:"#ec178c", 
  color:"white", 
  letterSpacing:'4px',
  padding: '0.75em 0',
  fontSize:'20px'
})


const Cart = () => {
    const cartState = useSelector((store: AppStore) => store.cart);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const toggleDrawer =  ( open: boolean) => (event: React.MouseEvent) => setDrawerOpen(open);

  return (
    <div style={{ position:"relative"}}>
        <Button variant="outlined" color='secondary' onClick={toggleDrawer(true)} className='cartBtn btn' sx={{background:"white", color:"#ec178c", height:'100%'}} > Show Cart</Button>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <Title> CART </Title>
          { cartState.length !== 0 ? cartState.map( item => (
              <List key={uuidv4()}> 
                <CartItem  {...item}/>
              </List> 
          )):
          (
            <Typography width={{xs:'80vw', md:'20vw'}} variant="h4" fontFamily='PT Sans' fontWeight='600' margin='auto' textAlign='center' >Cart is empty</Typography>
          )
          } 
          <Typography variant="h6" textAlign="center" my={4} fontWeight={600} display="flex" flexDirection='row' sx={{ justifyContent:"center"}}> Total price: <PinkText>${getTotalPrice(cartState)}</PinkText> </Typography>
          <div style={{ position:'absolute', top:15, right: 15, fontSize:"22px" }} onClick={toggleDrawer(false)}>X</div>
        </Drawer>

    </div>
  )
}
export default Cart