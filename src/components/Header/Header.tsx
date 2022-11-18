import "./Header.less";
import Logo from "../../assets/logo.png";
/**
 * Header component displays header of the application
 * @returns {JSX.Element} Returns a JSX.Element
 */
const Header = () => {
  return (
    <div className="header">
      <h3>GitHub Repositories With Search Functionality</h3>
      <img src={Logo} alt="logo" className="logo"/>
    </div>
  );
};

export default Header;
