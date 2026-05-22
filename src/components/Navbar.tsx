import HoverLinks from "./HoverLinks";
import { smoother } from "./utils/smoother";
import "./styles/Navbar.css";

const Navbar = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth > 1024) {
      e.preventDefault();
      const elem = e.currentTarget;
      const section = elem.getAttribute("data-href");
      if (smoother && section) {
        smoother.scrollTo(section, true, "top top");
      }
    }
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          Shivam
        </a>
        <a
          href="mailto:kshivamm1234@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          kshivamm1234@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about" onClick={handleNavClick}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#experience" href="#experience" onClick={handleNavClick}>
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={handleNavClick}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={handleNavClick}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
