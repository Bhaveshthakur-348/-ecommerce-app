import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="grid grid-cols-3 p-4 bg-white text-black shadow-lg sticky top-0 left-0 right-0 z-10">
        <Link to="/">
          <h1 className="font-bold text-lg text-blue-800 hover:text-blue-400">E-Commerce</h1>
        </Link>
    </header>
  );
};

export default Header;
