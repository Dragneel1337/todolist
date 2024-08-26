import { Button } from '../Button/Button';
import { FC } from 'react';

interface IProps {
	name: string;
	handleDelete: (id: number) => void;
	id: number;
}

export const TodoItem: FC<IProps> = props => {
	return (
		<li>
			<div>{props.name}</div>
			<Button onClick={() => props.handleDelete(props.id)}>👨🏿‍🦲</Button>
		</li>
	);
};
