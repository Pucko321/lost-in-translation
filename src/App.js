import './styles/App.css'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import Login from './views/Login.jsx'
import NotFound from './views/NotFound.jsx'
import Translation from './views/Translation.jsx'
import Profile from './views/Profile.jsx'
import { STORAGE_KEY_APP_NAME } from './const/storageKeys'

function App() {
  const basename =
  process.env.NODE_ENV === "production"
  ? 'x/demo'
  : '/'

  return (
    <BrowserRouter basename={basename}>
      <div className="App">
        <header className="App-header">
            <h1>{ STORAGE_KEY_APP_NAME }</h1>
            <nav>
              <li>
                <NavLink className="App-link" to="/translate">Translate</NavLink>
              </li>
              <li>
                <NavLink className="App-link" to="/profile">Profile</NavLink>
              </li>
            </nav>
        </header>
        <Routes>
          <Route path="/" element={< Login />} />
          <Route path="/translate" exact element={< Translation />} />
          <Route path="/profile" exact element={< Profile />} />
          <Route path="*" element={< NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
