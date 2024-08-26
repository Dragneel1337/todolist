import { FC, PropsWithChildren } from 'react';

interface IProps {
	onClick: () => void;
}

export const Button: FC<PropsWithChildren<IProps>> = props => {
	return (
		<button type="submit" onClick={props.onClick}>
			{props.children}
		</button>
	);
};
