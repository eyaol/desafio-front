import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Jokes from './components/jokes';
import List from './components/list';


//cria application store aplicando o middleware
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

//Provider disponibiliza a propriedade store para o aplicativo
class App extends Component {
	render(){
		return(
			<Provider store={store}>
				<div className="container">
					<header className="header-pagina">
	          <h1 className="titulo-pagina">Desafio GuiaBolso</h1>
	        </header>
					<div>
						<List />
						<Jokes />
					</div>
					<footer>
						<p>Enio Yao Lee</p>
						<p>enioyao@gmail.com</p>
					</footer>
				</div>
			</Provider>
		);
	}
}

export default App;
