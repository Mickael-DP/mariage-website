import { HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;
const Container = (props: ContainerProps) => {
	return (
		<div
			{...props}
			className={`mx-auto px-8 py-8 md:px-42 md:py-16 ${
				props.className || ''
			}`}>
			{props.children}
		</div>
	);
};

export default Container;