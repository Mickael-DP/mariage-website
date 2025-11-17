import { HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;
const Container = (props: ContainerProps) => {
	return (
		<div
			{...props}
			className={`px-8 py-8 md:px-24 md:py-16  ${
				props.className || ''
			}`}>
			{props.children}
		</div>
	);
};

export default Container;