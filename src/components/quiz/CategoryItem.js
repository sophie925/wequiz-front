import Button from "../common/Button";

const CategoryItem = ({ categories, onClick }) => {
    return (
        <div>
            {categories && categories.map((categories, index) => (
                <Button medium indigo2
                    name="category"
                    key={index}
                    value={categories.category}
                    onClick={onClick}
                >
                    {categories.categoryDisplay}
                </Button>
            ))}
        </div>    
    );
};

export default CategoryItem;