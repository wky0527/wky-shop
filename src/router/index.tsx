import React, {lazy, Suspense, useEffect} from "react";
import {Switch, Route} from "react-router-dom";
const Home = lazy(() => import('../views/Home'))
const Cart = lazy(() => import('../views/Cart'))
const Category = lazy(() => import('../views/Category'))
const Found = lazy(() => import('../views/Found'))
const My = lazy(() => import('../views/My'))
import { Loading } from 'antd-mobile'
export const AppRoutes = () => {
    return (
        <Suspense fallback={<div><Loading color='primary'/><span>加载中</span></div>}>
               <Switch>
                   <Route exact path='/' component={Home}></Route>
                   <Route exact path='/home' component={Home}></Route>
                   <Route exact path='/category' component={Category}></Route>
                   <Route exact path='/found' component={Found}></Route>
                   <Route exact path='/cart' component={Cart}></Route>
                   <Route exact path='/my' component={My}></Route>
               </Switch>
           </Suspense>
    )
}
