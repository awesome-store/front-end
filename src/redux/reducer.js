// initial state
let initialState = {
  cart: []
}

// action type 
const ADD_TO_CART = 'ADDTOCART';
const REMOVE_FROM_CART = 'REMOVEFROMCART';

// action creators
export const addtocart = (cart) => {
  return {
    type: ADD_TO_CART,
    payload: cart
  };
};

export const removefromcart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  };
};

// reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action
  // switch (type) {
  //   case ADDTOCART:
  //     return { ...state, cart: payload };

  //   case REMOVEFROMCART:
  //     return { ...state, cart: payload };

  //   default: return state;
  // }
  if (type === ADD_TO_CART) {
    const product = state.cart.find(item => item.id === payload.id);
    if (product) {
      const tempProduct = {...product, quantity: product.quantity + 1}
      return {...state, cart: [...state.cart.filter(item => item.id !== product.id), tempProduct]}
    } else {
      const tempProduct = {...action.payload, quantity: 1}
      return {...state, cart: [...state.cart, tempProduct]}
    }
    // return state;
  }
  else if (type === REMOVE_FROM_CART) {
    if (payload) {
      state.cart = state.cart.filter(item => item.id !== payload)
      return state;
    }
  }
  return state;
}
  
export default reducer;