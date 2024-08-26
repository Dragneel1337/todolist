import { useState } from 'react';
import './App.css';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { TodoItem } from './components/TodoItem/TodoItem';

const initialTodos = [
	{ name: 'cwel', checked: true, id: 0 },
	{ name: 'pelee', checked: true, id: 1 },
	{ name: 'nysiek', checked: false, id: 2 },
];

function App() {
	const [inputValue, setInputValue] = useState('');
	const [todos, setTodos] = useState(initialTodos);

	const [currentId, setCurrentId] = useState(initialTodos.length);

	function handleButton() {
		if (inputValue === '') {
			return false;
		}

		const temp = { name: inputValue, checked: false, id: currentId };

		setTodos([temp, ...todos]);
		setInputValue('');
		setCurrentId(currentId + 1);
	}

	function handleDelete(id: number) {
		setTodos(todos.filter(todo => todo.id !== id));
	}

	return (
		<>
			<h1>Złap je wszystkie</h1>
			<Input value={inputValue} setValue={setInputValue} />
			<Button onClick={handleButton}>Dodaj</Button>
			<ul>
				{todos.map(todo => {
					return <TodoItem key={todo.id} name={todo.name} handleDelete={handleDelete} id={todo.id} />;
				})}
			</ul>
		</>
	);
}

export default App;
