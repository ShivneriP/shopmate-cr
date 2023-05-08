import "./ProductCard.css";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useEffect } from "react";

export const ProductCard = ({product}) => {
  const {cartList,addToCart,removeFromCart}=useCart();
  const {name, price, image,id} = product;
  const[isInCart,setIsIncart]=useState(false);

    useEffect(()=>{
      const productIsInCart= cartList.find(cartItem=>cartItem.id===id);
      if(productIsInCart){
        setIsIncart(true)
       }else{
        setIsIncart(false);
       }
    },[cartList,id])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart?(<button className="remove" onClick={()=>removeFromCart(product)}>Remove</button>
      ):(<button onClick={()=>addToCart(product)}>Add To Cart</button>
      )}
        </div>
    </div>
  )
}
