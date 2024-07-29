import { Route, Link, Routes } from "react-router-dom";
import CompFormClient from "./CompFormClient";

/**
 * Composant pour la gestion des clients
 * CG : 27/07/2024
 */

const CompClient = () => (
  <div>
    <ul>
      <li><Link to="/clients/add">Saisie de Clients</Link></li>
    </ul>
    <Routes>
      <Route path="add" element={<CompFormClient />} exact />
    </Routes>
  </div>
);

export default CompClient;
