import axios from 'axios';

const CATEGORIAS_URL = 'https://api.chucknorris.io/jokes/categories';
const DETAIL_URL = 'https://api.chucknorris.io/jokes';

//Action Creator para pegar a lista de categorias
export const fetchCategorias = () => {
	const request = axios.get(CATEGORIAS_URL);
	return {
		type: 'FETCH_CATEGORIA',
		payload: request
	};
};

//Action Creator para quando o usuario clicar e selecionar uma opcao da lista
export const fetchJoke = (opcao) => {
	const request = axios.get(`${DETAIL_URL}/random?category=${opcao}`);
	return {
		type: 'FETCH_JOKE',
		payload: request
	};
}
