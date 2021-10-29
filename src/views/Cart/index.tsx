import React,{FC} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartList from './cart';
const Cart: FC = () => {
    return (
      <div>
          <Header title='购物车'/>
          <CartList/>
          <Footer/>
      </div>
    )
}
export default Cart;
