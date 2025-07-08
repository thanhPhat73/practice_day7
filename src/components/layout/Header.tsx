const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Magazine</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Category
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Product
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Login
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Customer
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
