import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';


function List(props)  {
		const list = props.list_of_todos.map((e) => {
			return (<li key={e.id}> {e.title}</li>)
		});
		return (
			<div><h1>{props.children}</h1>
				<ul>
					{list}
				</ul>
			</div>
		);
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
			<React.Fragment><List list_of_todos={this.state.listDone}>List of Done</List><List list_of_todos={this.state.listUnDone}> List
				of Undone</List></React.Fragment>)
	}
};
export default App;
