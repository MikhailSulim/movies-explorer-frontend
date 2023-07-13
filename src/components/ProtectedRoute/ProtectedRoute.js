import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ component: Component, ...props }) => {
  console.log(Component, props);
  return props.isLoggedIn ? <Component {...props} /> : <Navigate to="/" />;
};

export default ProtectedRouteElement;
