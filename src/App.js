import React, { Component } from 'react';
import './App.css';
import CardList from './frontend/components/cardList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}

	componentDidMount() {
		fetch('http://localhost:3000/api/todos')
			.then((res) => res.json())
			.then((todos) => {
				// console.log(todos);
				this.setState({ todos });
			})
			.catch((error) => console.log(error));
	}
	render() {
		return (
			<div className="App">
				<h1>To Do App</h1>
				<CardList />
			</div>
		);
	}
}
export default App;
