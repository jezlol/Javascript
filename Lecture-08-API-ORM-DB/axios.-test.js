const axios = require('axios');

// Create a new user
axios.post('http://localhost:3000/users', {
  name: 'John Doe',
  email: 'john.doe@example.com'
})
.then(response => {
  console.log('User created:', response.data);
})
.catch(error => {
  console.error('Error creating user:', error);
});

// Get all users
axios.get('http://localhost:3000/users')
.then(response => {
  console.log('Users:', response.data);
})
.catch(error => {
  console.error('Error fetching users:', error);
})