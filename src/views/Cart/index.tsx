import React,{FC} from "react";
import Header from "../../components/Header";
import CartList from './cart';
const Cart: FC = () => {
    return (
      <div>
          <Header title='购物车'/>
          <CartList/>
      </div>
    )
}
export default Cart;
