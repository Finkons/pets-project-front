import { Link } from "./Nav.styled";

export default function Nav() {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/notices/:categoryName">Find pet</Link>
    </nav>
  );
}
