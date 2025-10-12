export interface IMainContainerProps {
	children: React.ReactNode;
	bgColor?: string;
}

const MainContainer: React.FC<IMainContainerProps> = ({ children, bgColor }) => {
	return (
		<div className="container mx-auto px-4 min-w-screen flex flex-col items-center"
			style={{
				backgroundColor: bgColor,
				// minHeight: "calc(100vh - 4rem)",
				paddingTop: "4rem",
			}}>
			{children}
		</div>
	);
};

export default MainContainer;
