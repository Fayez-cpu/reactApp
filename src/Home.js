import React, { useState, useEffect, useRef } from 'react'
import DisplayItems from './DisplayItems'
import Cart from './Cart'
import "./App.css"
import Itemsy from './Carty'
import { Link } from 'react-router-dom'



export default function Home() {
const [ItemsInCart, setItemsInCart] = useState([])
const [overlayOpacity, setOverlayOpacity] = useState("none")
const elementRef = useRef(null)
const cartPopup = (<div className="cartPopup" ref={elementRef}>
  <h1>Item Added to Cart <span onClick={closePopup}>X</span></h1>
  <h4>{ItemsInCart[ItemsInCart.length - 1]?.name}</h4>
  <img src={ItemsInCart[ItemsInCart.length - 1]?.image} style={{width: 200, height: 200}} />
  </div>)
const overlay = (<div style={{width: "100vw",minHeight: "100vh",top: 0,opacity: 0.2, position: "absolute", backgroundColor: "gray", display: overlayOpacity}} onClick={closePopup}>style</div>)

useEffect(() => {
  document.body.style.overflowX = 'hidden';
  return () => {
    document.body.style.overflowX = ''; // Cleanup on unmount
  };
})
function addItemToCart(object){
  setItemsInCart(prev => [...prev, object])
  
  let existingItem = Itemsy.find(item => item.name === object.name)
  if (existingItem){
    existingItem.quantity += 1
  }
  else{
    Itemsy.push(object)
  }
  elementRef.current.style.transition = "right 1s"
  elementRef.current.style.right = "10px"
  setOverlayOpacity("block")
}
function closePopup(){
      elementRef.current.style.transition = "none"
    elementRef.current.style.right = "-360px"
    setOverlayOpacity("none")
}
  return (
  <div >
  
  <DisplayItems getItemAdded={addItemToCart} cartNum={Itemsy}/>
  {cartPopup}
  {overlay}
  <Link to="/cart">Go to Cart</Link>
  </div>


)
}
