const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const headlines = [
  "Why Cake & Co is Mumbai's Sweetest Spot in 2025",
  "Discover the Charm of Cake & Co in Mumbai!",
  "Cake & Co: The Hidden Gem of Mumbai’s Dessert Scene",
  "Top Reasons Cake & Co is Everyone’s Favorite in Mumbai",
  "Mumbai Loves Cake & Co — Here's Why!"
];

app.post('/business-data', (req, res) => {
  const { name, location } = req.body;
  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];

  res.json({
    rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
    reviews: Math.floor(Math.random() * 200 + 50),
    headline: randomHeadline
  });
});

app.get('/regenerate-headline', (req, res) => {
  const randomHeadline = headlines[Math.floor(Math.random() * headlines.length)];
  res.json({ headline: randomHeadline });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
