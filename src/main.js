import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from './components/TodoInput.js';
import TodoTable from './components/TodoTable.js';

export default class Main extends React.Component {
	constructor(){
		super();

		this.state = {
			todoItems: [],
			done: false
		}
	}

	addItem(item){
		let items = this.state.todoItems;

		items.push({
			title: item,
			done: false
		});

		this.setState({
			todoItems: items
		});
	}

	deleteItem(i){
		let itemList = this.state.todoItems;

		itemList.splice(i,1);

		this.setState({
			todoItems: itemList
		})
	}

	toggleItem(i){
		let itemList = this.state.todoItems;

		itemList[i].done = !itemList.done;

		this.setState({
			todoItems: itemList
		})
	}


	isChecked() {
		console.log(this);

		this.setState({
			done: !this.state.done
		});

	}

	render(){
		return (
			<div className="container">
				<TodoInput
					addItem={this.addItem.bind(this)}
				/>
				<TodoTable
					items={this.state.todoItems}
					deleteItem={this.deleteItem.bind(this)}
					toggleItem={this.toggleItem.bind(this)}
				/>
			</div>
		)
	}
}

ReactDOM.render(<Main/>, document.getElementById('app'));
