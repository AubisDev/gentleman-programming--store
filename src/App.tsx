import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from './redux/state/products';
import useFetchAndLoad from './hooks/useFetchAndLoad.hook';
import { getProductsAdapter } from './adapters';
import { getProducts } from './services/product.service';
import { AppStore } from './redux/store';
import { FilterSelector } from './components';
import Cart from './components/Cart';
import ProductList from './components/ProductList.component';

function App() {

  
  const dispatch = useDispatch();
  const { loading, callEndpoint } = useFetchAndLoad();
 
  useEffect(() => {
    const getItems = async () => {
      const productList = await callEndpoint(getProducts());
      dispatch( getAllProducts(getProductsAdapter(productList)) )
    }

    return () => {
      getItems();
    }
  }, [])



  return (
    <div className="App">
      <Cart/>
      <br/>
      <br/>
      <FilterSelector/>
      <ProductList/>
    </div>
  )
}

export default App








