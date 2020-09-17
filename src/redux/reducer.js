// initial state
let initialState = {
  cart: {},
  total: 0
}

// action type 
const ADD_TO_CART = 'ADDTOCART';
// const REMOVEFROMCART = 'REMOVEFROMCART';

// action creators
export const addtocart = (cart) => {
  return {
    type: ADD_TO_CART,
    payload: cart
  };
};

// export const removefromcart = (cart) => {
//   return {
//     type: REMOVEFROMCART,
//     payload: cart
//   };
// };

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
    console.log("here======>")
    console.log("state.cart ", state.cart);
    console.log("state.cart[0]", state.cart[0]);
    console.log("action ", action)
    state.cart[action.payload.id] = {
      "value": action.payload,
      "quantity": 0
    }
    console.log("action.payload.id", action.payload.id);
    console.log("state.cart['test']", state.cart);
    return state;
    // if(Object.keys(x).length > 0){
    // if(state.cart)
    //   let addedItem = state.cart.find(item => item.id === payload.id)
    //   console.log(addedItem);
    //   let existedItem = state.addedItems.find(item => id === item.id)
    //   if (existedItem) {
    //     addedItem.quantity += 1
    //     return {
    //       ...state,
    //       total: state.total + addedItem.price
    //     }
    //   } else {
    //     console.log(addedItem);
    //     addedItem.quantity = 1;
    //     let newTotal = state.total + addedItem.price

    //     return {
    //       ...state,
    //       addedItems: [...state.addedItems, addedItem],
    //       total: newTotal
    //     }
    //   }
    // } else {
    //   return state;
    // }
  }
  return state;
}
  
export default reducer;