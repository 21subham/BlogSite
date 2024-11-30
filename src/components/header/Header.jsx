import { useState, useEffect } from "react";
import { Container, LogoutBtn, Logo } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../appwrite/auth";

function Header() {
  const [username, setUsername] = useState(null);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const user = await authService.getCurrentUser();
      if (user) {
        setUsername(user.name);
      }
    };

    fetchUser();
  }, []);

  return (
    <header className="py-2 shadow bg-gray-500 rounded">
      <Container>
        <nav className="flex items-center">
          {/* Logo Section */}
          <div className="mr-4 flex items-center">
            <Link to="/">
              <Logo width="80px" />
            </Link>

            {/* username */}
            <div className="flex ml-auto text-xl px-2 text-black font-bold">
              {username ? username : "Loading..."}
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="flex ml-auto text-xl">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                    onClick={() => navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
