import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import createReactClass from 'create-react-class';

class List extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const list = this.props.name.map((e) => {
			return (<li key={e.id}> {e.title}</li>)
		});
		return (
			<div><h1>{this.props.children}</h1>
				<ul>
					{list}
				</ul>
			</div>
		);
	}

}

class App extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {listDone: [], listUnDone: []};

	}

	componentDidMount() {
		let undone = [], done = [];
		const init = fetch("https://jsonplaceholder.typicode.com/todos");
		init.then((res) => res.json())
			.then((todos) => {
				const array = todos.slice(0, 20);
				for (let todo of array) {
					if (todo.completed) {
						done.push(todo)
					} else {
						undone.push(todo);
					}
				}
				this.setState({listDone: done, listUnDone: undone});
			})
	}

	render() {
		return (
			<React.Fragment><List name={this.state.listDone}>List of Done</List><List name={this.state.listUnDone}> List
				of Undone</List></React.Fragment>)
	}
};
export default App;
