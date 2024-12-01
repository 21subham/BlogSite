function Logo() {
  return (
    <div className="h-full flex items-center">
      <img
        src="./src/assets/logo.png"
        style={{ width: "100px", maxHeight: "100%" }}
        className="object-contain"
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
