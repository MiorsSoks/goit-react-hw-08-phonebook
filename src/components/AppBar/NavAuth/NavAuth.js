import { NavLink } from 'react-router-dom';
export default function NavAuth() {
  return (
 
        <div>
          <NavLink to="/register">
            Register
          </NavLink>{' '}
          | <NavLink to="/login">Login</NavLink>
        </div>

  );
}