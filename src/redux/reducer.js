// initial state
const initialState = {
    cart: [
      {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110},
      {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80},
      {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120},
      {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260},
      {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160},
      {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90}
    ],
    total: 0
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
    if (action.type === ADDTOCART) {
      console.log("here======>")
      console.log("state.cart ", state.cart);
      console.log("state.cart[0]", state.cart[0]);
      console.log("action ", action)
      if(state.cart.keys(x).length > 0) {
        let addedItem = state.cart.find(item => item.id === action.payload.id)
        console.log(addedItem);
      }
      let existedItem = state.addedItems.find(item => action.id === item.id)
      if (existedItem) {
        addedItem.quantity += 1
        return {
          ...state,
          total: state.total + addedItem.price
        }
      } else {
        console.log(addedItem);
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price

        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal
        }
      }
    } else {
      return state;
    }
  }
  
export default reducer;