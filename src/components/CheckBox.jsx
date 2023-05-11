import { useState } from "react";


const Checkbox = props => {
	// console.log(props)
	const {
		onChange,
		data: { id, description, done }
	} = props;

<<<<<<< HEAD

	
=======
	const { list, setList } = props;
	const [todoEdit, setTodoEdit] = useState(null)
	const [editingText, setEditingText] = useState("")

	const idValue = props.data.id;

	const onClickBorrarItem = e => {
		const borrarItem = list.filter(item => item.id != idValue)
		setList(borrarItem);
		localStorage.setItem('items', JSON.stringify(borrarItem));
	}

	function editTodo(idValue) {
		const updatedTodos = [...list].map((list) => {
			if (list.id == idValue) {
				list.description = editingText
			}
			return list
		})
		setList(updatedTodos)
		setTodoEdit(null)
		setEditingText("")

		localStorage.setItem('items', JSON.stringify(updatedTodos));
	}

>>>>>>> develop
	return (

		<>{/*librería que agrupa elementos  */}

			<label className="todo new-item">
				<input
					className="todo__state"
					name={id} type="checkbox"
					defaultChecked={done}
					onChange={onChange}
				/>
				{todoEdit == idValue ?
					(<input
						type="text"
						onChange={(e) => setEditingText(e.target.value)}
						value={editingText}
					/>)
					:
					(<div className="todo__text">{description}</div>)}

				<button className="btn-borrar-item" onClick={onClickBorrarItem}>borrar</button>

				{todoEdit == idValue ?
					(<button className="btn-enviar-editar-item"
						onClick={() =>
						editTodo(idValue)}>Enviar editar
						</button>)
					:
					(<button  className="btn-editar-item" onClick={() =>
						setTodoEdit(idValue)}>
						Editar
					</button>
					)}

				

			</label>

		</>
	);
};

export default Checkbox;