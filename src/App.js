import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/ComponenteA';
import ComponenteB from './components/ComponenteB';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="https://juanefrain87.github.io/galletas/" element={<Login />} />
      <Route path="/sesion-iniciada" element={<ComponenteB />} />
    </Routes>
  </Router>

  );
}

export default App;
