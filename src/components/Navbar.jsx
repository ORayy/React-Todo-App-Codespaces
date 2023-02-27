import About from "../pages/About"
import Help from "../pages/Help"
import Create from "../pages/Create"

export default function Navbar() {
  return (
    <nav className="navbar">
      <nav className="nav-items">
        <nav className="nav-logo">LoGO</nav>
        <nav className="nav-links">
          <ul className="nav-links-items">
            <li><a href={<About />}>About</a></li>
            <li><a href={<Help />}>Help</a></li>
            <li><a href={<Create />}>Create</a></li>
          </ul>
        </nav>
      </nav>
    </nav>
  )
}
