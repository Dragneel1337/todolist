export const Input = props => {
	return <input type="text" required value={props.value} onChange={event => props.setValue(event.target.value)} />;
};
