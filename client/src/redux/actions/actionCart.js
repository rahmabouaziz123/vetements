import axios from "axios";
import { CARD_ADD_ITEM, CARD_REMOVE_ITEM, DECREMENT, INCREMENT } from "../actionTypes/actionTypeCart";



export const addToCart = (_id, qty) => async (dispatch) => {
    const { data } = await axios.get(`/product/getOneProduct/${_id}`);
    dispatch({
      type: CARD_ADD_ITEM ,
      payload: {
        product: data._id,
        nameProd: data.nameProd,
        image: data.image,
        price: data.price,
        quantity:data.quantity,
        qty
      },
    });
  //   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  export const removeFromCart = (id) => (dispatch) => {
    dispatch({
      type: CARD_REMOVE_ITEM,
      payload: id,
    });
    // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  export const incrementQty = (cartItem) => (dispatch) => {
    dispatch(
      {
        type: INCREMENT,
        payload: cartItem
      }
    )
  }; 
  
  export const decrementQty = (cartItem) => (dispatch) => {
    dispatch(
      {
        type: DECREMENT,
        payload: cartItem
      }
    )
  };
  