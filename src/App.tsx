import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProducts } from './redux/state/products';
import { FilterSelector, Cart, ProductList, Navbar } from './components';
import { getProductsFB } from './firebase/actions.firebase';
import { Typography } from '@mui/material';

function App() {  
  const dispatch = useDispatch();

  useEffect(() => {
    const getItems = async () => {
      const productList = await getProductsFB();
      dispatch( getAllProducts(productList) )
    }

    return () => {
      getItems();
    }
  }, [])

  return (
    <div style={{ position:"relative", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <Navbar />
      <br/>
      <br/>
      <div style={{ display:"flex", flexDirection:"row", justifyContent:"center", marginTop:100}}>
        <FilterSelector/>
        <Cart/>
      </div>
      <ProductList/>
      <Typography id="author" position='absolute' p={2} bottom={0} width={{xs:'60%', md:'30%'}} textAlign='center' fontSize="16px" fontWeight={700} fontFamily='"Orbitron", sans-serif' sx={{ background:"rgba(255,255,255,.75)"}}> Created by Aubis Sanchez </Typography>
    </div>
  )
}

export default App








