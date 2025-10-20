import { HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;
const Container = (props: ContainerProps) => {
	return (
		<div
			{...props}
			className={`mx-auto px-16 py-16 ${
				props.className || ''
			}`}>
			{props.children}
		</div>
	);
};

export default Container;