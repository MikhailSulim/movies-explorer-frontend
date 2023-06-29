import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ component: Component, ...props }) => {
  return props.isLoggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRouteElement;
