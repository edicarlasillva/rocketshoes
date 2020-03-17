import { combineReducers } from 'redux';

import cart from './cart/reducer';

// combina todos os reducers em um único reducer
export default combineReducers({
  cart,
});
