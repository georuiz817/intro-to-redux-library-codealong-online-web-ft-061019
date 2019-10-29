import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
	handleOnClick = event => {
		this.props.increaseCount();
	};

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>Click</button>
				<p>{this.props.items.length}</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		items: state.items
	};
};

const mapDispatchToProps = dispatch => {
	return {
		increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);


//to gain access to the store somewhere in our app, we use a second function provided by react-redux, connect
/*

Ok, so this code places a button on the page with an onClick event 
listener pointed to this.handleOnClick. When this.handleOnClick is invoked, it calls a function, 
this.props.increaseCount. Well.. increaseCount is actually being provided by the new function below our A
pp component: mapDispatchToProps.

Meanwhile, we've also got this.props.items.length, which is also a prop created from our Redux store.
 As the store's items property increases, App will display a different number!



*/