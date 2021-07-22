import "./NavBar.css";

const NavBar = (props) => {
  const { navItems } = props;
  return (
    <ul class="nav sticky-top justify-content-center">
      {navItems.map((navItem) => {
        return (
          //implement routing scrollspy
          <li class="nav-item">
            <p class="nav-link navItemName">{navItem.routeName}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
