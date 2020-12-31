import facebookLoginRenderProps from "react-facebook-login/dist/facebook-login-render-props";

// initial state
let initialState = {
  cart: [],
  token: null,
  user: null,
  loginErrorMessage: null,
  loginLoader: false
}

// action type
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ADD_QUANTITY = 'ADD_QUANTITY';
const SUBSTRACT_QUANTITY = 'SUBSTRACT_QUANTITY';

const AUTH_INIT = 'AUTH_INIT';
const AUTH_SET_TOKEN = 'AUTH_SET_TOKEN';

const LOGIN_ERROR_MESSAGE = 'LOGIN_ERROR_MESSAGE';
const LOGIN_LOADER = 'LOGIN_LOADER';

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

export const addquantity = (id) => {
  return {
    type: ADD_QUANTITY,
    payload: id
  };
};

export const substractquantity = (id) => {
  return {
    type: SUBSTRACT_QUANTITY,
    payload: id
  }
}

export const authInit = () => {
  return {
    type: AUTH_INIT,
    payload: {
      token: localStorage.getItem('token'),
      user: localStorage.getItem('user'),
    }
  }
}

export const authSetToken = (token, user) => {
  if (token) {
    localStorage.setItem('token', token);
  } else  {
    localStorage.removeItem('token');
  }
  if (user) {
    localStorage.setItem('user', user);
  } else {
    localStorage.removeItem('user');
  }

  return {
    type: AUTH_SET_TOKEN,
    payload: { token, user },
  }
}

export const setLoginErrorMessage = (message) => {
  return {
    type: LOGIN_ERROR_MESSAGE,
    payload: message
  }
}

export const setLoginLoader = (bool) => {
  return {
    type: LOGIN_LOADER,
    payload: bool
  }
}

// reducer
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      const product = state.cart.find(item => item.id === payload.id);
      if (product) {
        const tempProduct = {...product, quantity: product.quantity + 1};
        return {...state, cart: [...state.cart.filter(item => item.id !== product.id), tempProduct]};
      } else {
        const tempProduct = {...action.payload, quantity: 1};
        return {...state, cart: [...state.cart, tempProduct]};
      }

    case REMOVE_FROM_CART:
      if (payload) {
        state.cart = state.cart.filter(item => item.id !== payload)
        return state;
      }
      break;

    case ADD_QUANTITY:
      if (payload) {
        state.cart = state.cart.map(item => {
          if (item.id === payload) {
            item.quantity++;
          }
          return item;
        })
      }
      return state;

    case SUBSTRACT_QUANTITY:
      if (payload) {
        state.cart = state.cart.map(item => {
          if (item.id === payload) {
            if (item.quantity !== 1) {
              item.quantity--;
            }
          }
          return item;
        })
      }
      return state;

    case AUTH_INIT:
    case AUTH_SET_TOKEN:
      const { token, user } = payload;
      return {...state, ...{ token, user } };

    case LOGIN_ERROR_MESSAGE:
      if (payload) {
        state.loginErrorMessage = payload;
        return state;
      }
      break;

    case LOGIN_LOADER:
      if (payload) {
        state.loginLoader = false;
      } else {
        state.loginLoader = true;
      }
      return state;

    default: return state;
  }
}

export default reducer;