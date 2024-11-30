function Logo({ width = "100px" }) {
  return (
    <div className="h-full flex items-center">
      <img
        src="./src/assets/logo.png"
        style={{ width: width, maxHeight: "100%" }}
        className="object-contain"
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
