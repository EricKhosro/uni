import payeshLogo from "Assets/Images/payeshLogo.png";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-screen px-10 flex flex-row justify-between items-center h-16 bg-red-04">
      <div className="flex flex-row justify-start items-center gap-3">
        <img src={payeshLogo} className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Header;
