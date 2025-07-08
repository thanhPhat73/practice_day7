import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

interface Icategory {
  id: number;
  name: string;
  slug: string;
}

const Sidebar = () => {
  const [categories, setCategories] = useState<Icategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const activeCatId = searchParams.get("categoryId");

  const url = "https://api.escuelajs.co/api/v1/categories";

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data: Icategory[] = await response.json();
        setCategories(data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Unknown error occurred";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <aside className="w-64 bg-white text-black p-6 border-r">
      <h2 className="text-2xl font-bold mb-4">Category</h2>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <nav>
          <ul>
            <li className="mb-2">
              <Link
                to="/"
                className={`block px-3 py-2 rounded hover:bg-gray-100 ${
                  !activeCatId ? "bg-blue-100 text-blue-700 font-semibold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat.id} className="mb-2">
                <Link
                  to={`/?categoryId=${cat.id}`}
                  className={`block px-3 py-2 rounded hover:bg-gray-100 ${
                    activeCatId === String(cat.id)
                      ? "bg-blue-100 text-blue-700 font-semibold"
                      : ""
                  }`}
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  );
};

export default Sidebar;
