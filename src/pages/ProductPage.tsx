import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

interface IProduct {
  id: number;
  title: string;
  price: number;
  images: string[];
  slug: string;
}

const ProductPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  const catId = searchParams.get("categoryId");

  const url = catId
    ? `https://api.escuelajs.co/api/v1/categories/${catId}/products`
    : `https://api.escuelajs.co/api/v1/products?offset=0&limit=8`;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [url]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>
      {error && <p className="text-red-500">{error}</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              image={p.images[0]}
              slug={p.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
