"use client"

import { createContext, ReactNode, useEffect, useReducer } from 'react';
import { cartReducer } from '../reducer';
export const cartContext = createContext<any>(null);

const ContextWrapper = ({children}: {children: ReactNode}) => {
  const initialValueOfCart = {
    cart: [],
  }
  const [state, dispatch] = useReducer(cartReducer, initialValueOfCart)
  useEffect(() => {
    let cart = localStorage.getItem("cart") as string
    if(cart === null) {
      localStorage.setItem("cart",JSON.stringify(state.cart))
    } else {
      initialValueOfCart.cart = JSON.parse(cart);
    }
  })
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }, [state.cart])
  return (
    <cartContext.Provider value={{state,dispatch}}>
      {children}
    </cartContext.Provider>
  )
}

export default ContextWrapper