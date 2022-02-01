import './styles/App.css'
import {Routes, Route, HashRouter } from 'react-router-dom'
import Login from './views/Login.jsx'
import NotFound from './views/NotFound.jsx'
import Translation from './views/Translation.jsx'
import Profile from './views/Profile.jsx'
import Header from "./components/Header"

function App() {
  const basename =
  process.env.NODE_ENV === "production"
  ? '/'
  : '/'

  return (
    <HashRouter basename={basename}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={< Login />} />
          <Route path="/translate" exact element={< Translation />} />
          <Route path="/translate/:pathMessage" exact element={< Translation />} />
          <Route path="/profile" exact element={< Profile />} />
          <Route path="*" element={< NotFound />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
