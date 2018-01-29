const INITIAL_STATE = {
	todasCategorias: [],
	selected: null
};


export default(state = { INITIAL_STATE }, action) => {
	switch (action.type) {
		case 'FETCH_CATEGORIA':
			return {...state, todasCategorias: action.payload.data};
		case 'FETCH_JOKE':
			return {...state, selected: action.payload.data};
		default:
			return state;
	}

}
