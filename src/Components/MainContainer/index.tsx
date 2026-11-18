export interface IMainContainerProps {
	children: React.ReactNode;
	bgColor?: string;
}

const MainContainer: React.FC<IMainContainerProps> = ({ children, bgColor }) => {
	return (
		<div
			className="container mx-auto px-4 w-full flex flex-col items-center"
			style={{
				backgroundColor: bgColor,
				paddingTop: "4rem",
			}}
		>
			{children}
		</div>
	);
};

export default MainContainer;
