import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setloader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //TODO: make a simpler logic
    //authentication is true by default so true && false !== true, sent to login page
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setloader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading ....</h1> : <>{children}</>;
}

Protected.propTypes = {
  children: PropTypes.node.isRequired,
  authentication: PropTypes.bool,
};
