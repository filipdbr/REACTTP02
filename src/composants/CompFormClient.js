import React, { useState } from "react";

/**
 * Formulaire pour la saisie des clients
 * CG : 27/07/2024
 */

function CompFormClient() {
  const [client, setClient] = useState(null);

  const fcSubmit = (e) => {
    e.preventDefault();
    const newClient = {
      nom: e.target.nom.value,
      prenom: e.target.prenom.value,
      datenaissance: e.target.datenaissance.value
    };
    setClient(newClient);
  };

  return (
    <div>
      <h1>Saisie des données client:</h1>
      <form onSubmit={fcSubmit}>
        <label htmlFor="nom">Nom</label>
        <input type="text" pattern="[A-Za-z]{2,40}" title="Chiffres interdits" required maxLength="40" minLength="2" name="nom" />
        <label htmlFor="prenom">Prénom</label>
        <input type="text" pattern="[A-Za-z]{2,30}" title="Chiffres interdits" required maxLength="30" minLength="2" name="prenom" />
        <label htmlFor="datenaissance">Date de Naissance</label>
        <input type="date" min="1950-01-01" name="datenaissance" />
        <input type="submit" value="Valider" />
      </form>
      {client && (
        <div>
          <h2>Données saisies:</h2>
          <p>Nom: {client.nom}</p>
          <p>Prénom: {client.prenom}</p>
          <p>Date de Naissance: {client.datenaissance}</p>
        </div>
      )}
    </div>
  );
}

export default CompFormClient;
