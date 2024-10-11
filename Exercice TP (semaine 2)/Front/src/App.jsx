import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  // Fonction pour ajouter un produit
  const addProductToCart = async () => {
    await fetch('/cart/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price }),
    });
    alert('Produit ajouté au panier');
  };

  // Fonction pour récupérer le total
  const getCartTotal = async () => {
    const response = await fetch('/cart/total');
    const data = await response.json();
    setTotal(data.total);
  };

  return (
    <div>
      <h1>Panier</h1>
      <div>
        <input
          type="text"
          placeholder="Nom du produit"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Prix du produit"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button onClick={addProductToCart}>Ajouter au panier</button>
      </div>
      <button onClick={getCartTotal}>Afficher le total du panier</button>
      <p>Total : {total} €</p>
    </div>
  );
}

export default App;