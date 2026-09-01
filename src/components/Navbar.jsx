import { IoMdHome } from "react-icons/io";
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side */}
      <div className="navbar__left">
        <h1 className="navbar__logo">YTMusic</h1>

        <div className="navbar__links">
          <div className="navbar__link header_icon"><IoMdHome size={40} /></div>
          <div className="navbar__link input_con"><input type="text"/></div>
        </div>
      </div>

      {/* Right side */}
      <div className="navbar__right">
        <h1 className="navbar__logo">YTMusic</h1>

        <div className="navbar__actions">
          <div className="navbar__action">1</div>
          <div className="navbar__action">2</div>
          <div className="navbar__action">2</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;