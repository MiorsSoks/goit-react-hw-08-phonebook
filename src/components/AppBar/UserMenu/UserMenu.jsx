import { useSelector, useDispatch } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { authOperations } from 'redux/auth';

export default function UserMenu() {
  const name = useSelector(
    authSelectors.getUsername
  );
  const dispatch = useDispatch()

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <p>Welcome, {name} </p>
        <button type="button" onClick={() => dispatch(authOperations.logOut())}>Logout</button>
      </div>
    </>
  );
}
