import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCategorias, fetchJoke } from '../actions';

class List extends Component {

	constructor(){
    super();
    this.state = {
        toggleMenu: true
    }
  }
	
	//chama action creator para pegar os dados da lista
	componentDidMount() {
		this.props.fetchCategorias();
	}
	//renderizar a lista de categorias
	renderList() {
		return this.props.categorias.map(categoria => {
			return <li key={categoria} item={categoria} onClick = {() => this.props.fetchJoke(categoria)}> {categoria} </li>
		});
	}

	render() {
		const toggleMenu = this.state.toggleMenu
		if(!this.props.categorias) {
			return(
				<div>Loading...</div>
			);
		}
		return(
			<div>
				<a className="header-menu" onClick={() => this.setState({ toggleMenu: !toggleMenu } )}>
					<div className = "barra"></div>
					<div className = "barra"></div>
					<div className = "barra"></div>
				</a>
				{
          toggleMenu && (
            <nav>
							<ul>
								{this.renderList()}
							</ul>
            </nav>
          )
        }
		</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {categorias: state.categorias.todasCategorias};
}

//dispatch é quem manda todas as actions para todos os reducers
//Mandando a Action fetchCategorias para o reducer
const mapDispatchToProps= (dispatch) => {
	return bindActionCreators({ fetchCategorias, fetchJoke }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(List);
