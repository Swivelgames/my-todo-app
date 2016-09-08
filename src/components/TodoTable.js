import React from 'react';

export default class TodoTable extends React.Component {

	populateTable(items){
		return items.map((v,i) =>
			<section className="item-container">
				<input type="checkbox"
					onChange={() => this.props.toggleItem(i)}
					value={v.done}
				/>
				<span
					className={"item-span" + (v.done ? ' done' : '')}
					key={i}
				>
					{v.title}
				</span>
				<button
					onClick={()=>this.props.deleteItem(i)}
					className="delete-button"
				>
				Delete
				</button>
			</section>
		);
	}

	render() {
		let items = this.populateTable(this.props.items);
		return (
			<section
				className="todo-table-container"
			>
				{items}
			</section>
		)
	}
}
