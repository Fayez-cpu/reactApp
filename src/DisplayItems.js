import React from "react"
import Items from "./Item"
import "./DisplayItems.css"
import { Link } from "react-router-dom"

function DisplayItems(props) {
    let cartQuantity = 0
    props.cartNum.forEach(element => {
        cartQuantity += element.quantity
    });
    return (
        <div>
        <Link to="/cart">
        <div style={{display: "flex", justifyContent:"end", cursor:"pointer"}}>
            <img src="https://cdn-icons-png.flaticon.com/512/649/649931.png" style={{width: 50, }}/>
            <span style={{alignSelf:"flex-end", paddingRight: 10 ,textDecoration:"none"}}>{cartQuantity}</span>
        </div>
        </Link>
        <div className = "itemsWrapper">{
        Object.entries(Items).map(([key,value]) => {
            return <div className = "itemWrapper" onClick={() => props.getItemAdded(value)}>
                <div className = "imageDescWrapper">
                <h2>{value.name}</h2>
              <p>{value.description}</p>
            </div>
            <figure>
                <img src={value.image} style={{maxWidth: 300}}/>
            </figure>
                 </div>
            

        })
        }
        </div>
        </div>
    )
}

export default DisplayItems