import React from 'react';

export default class TodoInput extends React.Component {
	constructor(){
		super();
	}

	handleInputs(e) {
		e.preventDefault();

		let input = this.refs.inputRef;
		let value = input.value;

		if(value.length === 0) {
			window.alert('Please type something');
		} else {
			this.props.addItem(value);
			input.value = '';
			input.focus();
		}
	}

	render(){
		return(
			<form className="todo-input" onSubmit={this.handleInputs.bind(this)}>
				<input
					ref="inputRef"
					type="input"
					placeholder="Insert To Do"
				/>
				<button>Submit</button>
			</form>
		)
	}
}
