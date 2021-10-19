import React, {lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";
const Home = lazy(() => import('../views/Home'))
const Cart = lazy(() => import('../views/Cart'))
const Category = lazy(() => import('../views/Category'))
const Info = lazy(() => import('../views/Info'))
const My = lazy(() => import('../views/My'))
export const AppRoutes = () => {
    return (
           <Suspense fallback={<div>Loading...</div>}>
               <Switch>
                   <Route exact path='/' component={Home}></Route>
                   <Route exact path='/cart' component={Cart}></Route>
                   <Route exact path='/category' component={Category}></Route>
                   <Route exact path='/info' component={Info}></Route>
                   <Route exact path='/my' component={My}></Route>
               </Switch>
           </Suspense>
    )
}
