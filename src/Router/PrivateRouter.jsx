import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, isUserLoading, handelSignOut } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (!user || !user.email || isUserLoading) return;

    fetch(`https://e-shopbd-server.vercel.app/adminCollection/${user.email}`)
      .then((res) => res.json())
      .then((value) => {
        if (value) {
          setIsAdmin(true);
        } else {
          handelSignOut();
        }
      })
      .catch((error) => {
        console.error("Error fetching admin data:", error);
      });
  }, [user, isUserLoading, handelSignOut]);

  if (isUserLoading) {
    return (
      <div className="text-center  flex justify-center items-center">
        <progress className="progress w-56 text-Primary_Color"></progress>
      </div>
    );
  }

  if (isAdmin) {
    return children;
  }
  if (!user) {
    return <Navigate to="/admin/Adminlogin" replace />;
  }
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
