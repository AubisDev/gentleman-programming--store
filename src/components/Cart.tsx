import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../redux/store';


const Cart = () => {
   
    const cartState = useSelector((store: AppStore) => store.cart);
    const dispatch = useDispatch();

  return (
    <div>{JSON.stringify(cartState)}</div>
  )
}
export default Cart