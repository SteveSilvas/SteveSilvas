export interface IPageTitleProps {
	children: string;
	eyebrow?: string;
	description?: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({ children, eyebrow, description }) => {
	return (
		<div className="max-w-2xl">
			{eyebrow && <span className="eyebrow">{eyebrow}</span>}
			<h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">
				{children}
			</h1>
			<span className="mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-wine to-gold" />
			{description && (
				<p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
					{description}
				</p>
			)}
		</div>
	);
};

export default PageTitle;
