import React, { useState, useEffect, useRef } from 'react'
import DisplayItems from './DisplayItems'
import Cart from './Cart'
import "./App.css"
import Home from './Home'
import Itemsy from './Carty'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'



export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home />} />
    <Route path='/cart' element={<Cart cartItems={Itemsy}/>} />
    </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}
