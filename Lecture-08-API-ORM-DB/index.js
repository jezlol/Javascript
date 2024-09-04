const express = require('express');
const sequelize = require('./models');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sync database
sequelize.sync().then(() => console.log('Database synced'));

// Routes
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.render('users', { users });
});

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const newUser = await User.create({ name, email });
  res.json(newUser);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
