import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchJoke } from '../actions';

class Jokes extends Component {
	componentDidMount() {
		this.props.fetchJoke("explicit");
	}

	render(){
		if(!this.props.detail) {
			return <h1>Loading...</h1>
		}

		return(
			<article className="frases">
				<h1 className="titulo-frase">{this.props.detail.category}</h1>
				<p className="descricao-frase">{this.props.detail.value}</p>
			</article>
		);
	}
}

const mapStateToProps = (state) => {
	return {detail: state.categorias.selected}
}

const mapDispatchToProps= (dispatch) => {
	return bindActionCreators({ fetchJoke }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);
