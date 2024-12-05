import logo from "../assets/logo.png";

function Logo() {
  return (
    <div className="h-full flex items-center">
      <img
        src={logo}
        style={{ width: "80px", maxHeight: "100%" }}
        className="object-contain"
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
