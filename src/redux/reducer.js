// initial state
const initialState = {
    user: null,
    url: null
  }
  // action type 
  const ADDTOCART = 'ADDTOCART';
  const REMOVEFROMCART = 'REMOVEFROMCART';
  
  // action creators
  export const addtocart = (productinfo) => {
    return {
      type: ADDTOCART,
      payload: productinfo
    };
  };
  
  export const removefromcart = (productinfo) => {
    return {
      type: REMOVEFROMCART,
      payload: productinfo
    };
  };
  
  // reducer
  const reducer = (state = initialState, action) => {
    // const { type, payload } = action
    switch (action.type) {
      case ADDTOCART:
        return { ...state, productinfo: action.payload };
  
      case REMOVEFROMCART:
        return { ...state, productinfo: action.payload };
  
      default: return state;
    }
  }
  
  export default reducer;