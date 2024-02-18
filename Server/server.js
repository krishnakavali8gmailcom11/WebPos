const express = require('express');
const app = express();



const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
  ];
  
  app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ error: 'Invalid username or password' });
    const token = jwt.sign({ username }, 'secret_key');
    res.json({ token });
  });


const catalogue = [
  { id: 1, name: 'Gift Card 1', price: 10 },
  { id: 2, name: 'Gift Card 2', price: 20 },
  { id: 3, name: 'Gift Card 3', price: 30 }
];

app.get('/api/catalogue', (req, res) => {
  res.json(catalogue);
});


const orders = [];

app.post('/api/orders', (req, res) => {
  const { giftCardId } = req.body;
  // Process the order and generate claim URL
  const claimUrl = `https://example.com/claim/${giftCardId}`;
  orders.push({ giftCardId, claimUrl });
  res.json({ claimUrl });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
