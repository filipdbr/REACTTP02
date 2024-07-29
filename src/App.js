import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CompClient from "./composants/CompClient";

/**
 * TP02 : CompClients : route fille pour pouvoir saisir des clients
 * CG : 27/07/2024
 */

const Home = () => (
  <div>
    <h2>Accueil</h2>
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/clients">Clients</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/clients/*" element={<CompClient />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
