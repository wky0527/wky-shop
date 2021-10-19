import React, { useState } from 'react'
import {AppRoutes} from './router';
import {HashRouter} from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <AppRoutes/>
    </HashRouter>
  )
}

export default App
