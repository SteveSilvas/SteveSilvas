export interface IMainContainerProps {
	children: React.ReactNode;
	bgColor?: string;
}

const MainContainer: React.FC<IMainContainerProps> = ({ children, bgColor }) => {
	return (
		<main
			className="flex w-full flex-1 flex-col items-center pt-16 md:pt-20"
			style={{ backgroundColor: bgColor }}
		>
			{children}
		</main>
	);
};

export default MainContainer;
