import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-cutsom-gray text-white px-4 py-2">
      <div>
        <Link to="/">Glozzom</Link>
      </div>
    </header>
  );
};

export default Header;
