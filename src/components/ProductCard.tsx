interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  slug: string;
}

const ProductCard = ({ title, price, image, slug }: ProductCardProps) => {
  return (
    <a
      href={`/products/${slug}`}
      className="bg-white rounded-lg shadow-md p-4 w-60 text-center hover:shadow-lg transition"
    >
      <img
        src={image || "https://via.placeholder.com/300x300?text=Product"}
        alt={title}
        className="w-full h-48 object-cover rounded"
        onError={(e) =>
          (e.currentTarget.src =
            "https://via.placeholder.com/300x300?text=No+Image")
        }
      />
      <h2 className="mt-4 text-gray-800 font-medium text-sm">{title}</h2>
      <p className="mt-1 text-blue-600 font-semibold">${price}</p>
    </a>
  );
};

export default ProductCard;
