import "./NavBar.css";

const NavBar = (props) => {
  const { navItems } = props;
  return (
    <ul className="nav sticky-top justify-content-center">
      {navItems.map((navItem) => {
        return (
          //implement routing scrollspy
          <li className="nav-item">
            <p className="nav-link navItemName">{navItem.routeName}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
