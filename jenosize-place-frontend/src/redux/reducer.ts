// third-party
import { combineReducers } from 'redux';

import searchReducer from './slices/search';
import placesReducer from './slices/places';

const reducer = combineReducers({
  search: searchReducer,
  places: placesReducer,
});

export default reducer;
