const express = require('express');
const app = express();
app.use(express.json());

let cart = []; // Panier en mémoire

// Route pour ajouter un produit au panier
app.post('/cart/products', (req, res) => {
    const { name, price } = req.body;
    cart.push({ name, price });
    res.status(200).send('Produit ajouté au panier');
});

// Route pour obtenir le total du panier
app.get('/cart/total', (req, res) => {
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    res.status(200).json({ total });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
