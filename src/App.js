import './styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect
} from 'react-router-dom'
import Login from './views/Login'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
            <h1>Home</h1>
        </header>
        <Routes>
          <Route path="/" exact element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
