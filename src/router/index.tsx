import React, {lazy, Suspense, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
const Home = lazy(() => import('../views/Home'))
const Cart = lazy(() => import('../views/Cart'))
const Category = lazy(() => import('../views/Category'))
const Found = lazy(() => import('../views/Found'))
const My = lazy(() => import('../views/My'))
const SignIn = lazy(()=> import('../views/Home/signIn'))
const FlashSale = lazy(()=> import('../views/Home/flashSale'))
const ShareCoupon = lazy(()=>import('../views/Home/coupon'))
const Members = lazy(()=>import('../views/Home/members'))
const MyOrder = lazy(()=>import('../views/My/myOrder'))
const Setting = lazy(() => import('../views/My/setting'))
import { Loading } from 'antd-mobile'
export const AppRoutes = () => {
    return (
        <Suspense fallback={<div><Loading color='primary'/><span>加载中</span></div>}>
               <Switch>
                   <Route exact path='/' component={Home}></Route>
                   <Route exact path='/category' component={Category}></Route>
                   <Route exact path='/found' component={Found}></Route>
                   <Route exact path='/cart' component={Cart}></Route>
                   <Route exact path='/my' component={My}></Route>
                   <Route exact path='/signIn' component={SignIn}></Route>
                   <Route exact path='/flashSale' component={FlashSale}></Route>
                   <Route exact path='/shareCoupon' component={ShareCoupon}></Route>
                   <Route exact path='/members' component={Members}></Route>
                   <Route exact path='/myOrder' component={MyOrder}></Route>
                   <Route exact path='/setting' component={Setting}></Route>
               </Switch>
           </Suspense>
    )
}
