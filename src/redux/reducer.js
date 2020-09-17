// initial state
let initialState = {
  // cart: {
  //   "image": "https://source.unsplash.com/random",
  //   "productTitle": "Ryobi Lithium-Ion Cordless Drill + Charger",
  //   "price": "49.99",
  //   "unit": "piece",
  //   "rating": "4",
  //   "id": 5
  // },
  cart: [],
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
    console.log("HERE");
    const product = state.cart.find(item => item.id === action.payload.id);
    if (product) {
      const tempProduct = {...product, quantity: product.quantity + 1}
      return {...state, cart: [...state.cart.filter(item => item.id != product.id), tempProduct]}
    } else {
      const tempProduct = {...action.payload, quantity: 1}
      return {...state, cart: [...state.cart, tempProduct]}
    }
    // for (let key in state.cart) {
    //   console.log("key ", key);
    //   if (key === "id" && state.cart[key] === action.payload.id) {
    //     console.log("here quantity ", state.cart[action.payload.id]["quantity"]);
    //     // console.log("----key === action.payload.id----");
    //     state.cart[action.payload.id]["quantity"] += 1
    //   } else {
    //     state.cart[action.payload.id] = {
    //       "value": action.payload,
    //       "quantity": 0
    //     }
    //   }
    // }
    // console.log("here======>")
    // console.log("state.cart ", state.cart);
    // console.log("state.cart[0]", state.cart[0]);
    // console.log("action ", action)

    // state.cart[action.payload.id] = {
    //   "value": action.payload,
    //   "quantity": 0
    // }
    
    // console.log("action.payload.id", action.payload.id);
    // console.log("state.cart['test']", state.cart);
    return state;
  }
  return state;
}
  
export default reducer;