export interface ItemMenuProps {
    name: string;
    description: string;
    price: string;
}
const ItemMenu: React.FC<ItemMenuProps> = ({
    name,
    description,
    price }) => {

    return (
        <div
            className="p-6 bg-zinc-50 border-[1px] rounded-2xl border-amber-200 grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr]"
        >
            <h3 className="text-xl font-semibold text-amber-700">
                {name}
            </h3>
            
            <p className="text-sm text-gray-700">
                {description}
            </p>

            <span className="font-bold text-lg">
                {price}

            </span>
        </div>
    )
};

export default ItemMenu;