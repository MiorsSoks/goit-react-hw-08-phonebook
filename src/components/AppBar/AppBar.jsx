import { useSelector } from 'react-redux';
import Navigation from './Navigation/Navigation';
import NavAuth from './NavAuth/NavAuth';
import UserMenu from './UserMenu';
import { authSelectors } from 'redux/auth';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Navigation/>
        {!isLoggedIn ? <NavAuth/> : <UserMenu/>  }
      </nav>
    </div>
  );
}
