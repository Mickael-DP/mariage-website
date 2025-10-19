import { HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;
const Container = (props: ContainerProps) => {
	return (
		<div
			{...props}
			className={`mx-auto px-6 sm:px-8 md:px-12 lg:px-26 ${
				props.className || ''
			}`}>
			{props.children}
		</div>
	);
};

export default Container;