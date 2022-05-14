import { Routes, Route } from 'react-router-dom';
import Contacts from './views/contacts/Contacts';
import AppBar from 'components/AppBar';
import Register from 'views/contacts/Register';
import LogIn from 'views/contacts/LogIn';

function App() {
  return (
    <div>
      <AppBar></AppBar>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn/>} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
