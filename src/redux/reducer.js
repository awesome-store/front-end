// initial state
const initialState = {
    cart: null
  }
  // action type 
  const ADDTOCART = 'ADDTOCART';
  const REMOVEFROMCART = 'REMOVEFROMCART';
  
  // action creators
  export const addtocart = (cart) => {
    return {
      type: ADDTOCART,
      payload: cart
    };
  };
  
  export const removefromcart = (cart) => {
    return {
      type: REMOVEFROMCART,
      payload: cart
    };
  };
  
  // reducer
  const reducer = (state = initialState, action) => {
    // const { type, payload } = action
    switch (action.type) {
      case ADDTOCART:
        return { ...state, cart: action.payload };
  
      case REMOVEFROMCART:
        return { ...state, cart: action.payload };
  
      default: return state;
    }
  }
  
export default reducer;