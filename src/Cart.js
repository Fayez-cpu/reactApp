import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import Itemsy from "./Carty";


function Cart(props){
    const [quant, setQuant] = useState(0)
    
    function updateQuantity(value, increment){
        value.quantity += increment
        setQuant((prev) => prev + 1)
    }
    return (
        <>
        <div className="cartDisplay">
            {
            (props.cartItems).map((value) => {
                return (
                    <div>
                    <h4>{value.name}</h4>
                    <p>quantity: <span style={{backgroundColor: "green", padding: 5, cursor:"pointer", height: 200}} onClick={() => updateQuantity(value, -1)}>-</span> {value.quantity} <span style={{backgroundColor: "green", padding: 5, cursor:"pointer", width: 15}} onClick={() => updateQuantity(value, 1)}>+</span></p>
                    <img src={value.image} style={{width:300, height:300}}/>
                    </div>
                )
            })
}
        <Link to="/"> Go back to home</Link>
        </div>
        </>
    )
}

export default Cart