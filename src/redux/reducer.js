// initial state
const initialState = {
    user: null,
    url: null
  }
  // action type 
  const LOGIN = 'LOGIN';
  const URLSEND = 'URLSEND';
  
  // action creators
  export const login = (user) => {
    return {
      type: LOGIN,
      payload: user
    };
  };
  
  export const urlsend = (url) => {
    return {
      type: URLSEND,
      payload: url
    };
  };
  
  // reducer
  const reducer = (state = initialState, action) => {
    // const { type, payload } = action
    switch (action.type) {
      case LOGIN:
        return { ...state, user: action.payload };
  
      case URLSEND:
        return { ...state, url: action.payload };
  
      default: return state;
    }
  }
  
  export default reducer;