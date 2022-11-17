import "./Header.less";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="header">
      <h3>GitHub Repositories With Search Functionality</h3>
      <img src={Logo} alt="logo" className="logo"/>
    </div>
  );
};

export default Header;
