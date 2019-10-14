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
		fetch('http://localhost:3000/api/todos/')
			.then((res) => res.json())
			.then((todos) => {
				// console.log(todos);
				this.setState({ todos: todos });
				console.log(this.state);
			})
			.catch((error) => console.log(error));
	}
	render() {
		return (
			<div className="App">
				<h1 className="bg-yellow pa1">EUROSTAR's To Do App</h1>
				<div className="ToDos">
					<CardList className="List" todos={this.state.todos.reverse()} />
				</div>
			</div>
		);
	}
}
export default App;
