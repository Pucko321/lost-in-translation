import './styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from 'react-router-dom'
import Login from './views/Login.jsx'
import Translation from './views/Translation.jsx'
import Profile from './views/Profile.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
            <h1>Lost In Translation test-header</h1>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
