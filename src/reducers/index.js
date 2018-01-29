import { combineReducers } from 'redux';
import categoriaReducer from './categoriaReducer';

export default combineReducers({
	categorias: categoriaReducer
});