import React from 'react'
import {AppRoutes} from './router';
import {HashRouter} from "react-router-dom";
import {WaterMark} from 'antd-mobile';
const textProps = {
    content: 'Wang Ke Yu'
}
function App() {
  return (
    <HashRouter>
      <AppRoutes/>
      <WaterMark {...textProps}/>
    </HashRouter>
  )
}

export default App
