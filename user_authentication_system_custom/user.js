const readlineSync = require('readline-sync');
const auth = require('./auth');
const storage = require('./storage');
const menu = require('./menu');

// Register a new user
function registerUser() {
    const name = readlineSync.question('Enter your name: ');
    const email = readlineSync.question('Enter your email: ');
    const password = readlineSync.question('Enter your password: ', { hideEchoBack: true });

    // Encrypt password
    const hashedPassword = auth.hashPassword(password);

    // Create user object
    const newUser = { name, email, password: hashedPassword };

    // Save user to storage
    storage.saveUser(newUser);

    console.log('Registration successful!');
}

// Log in an existing user
function loginUser() {
    const email = readlineSync.question('Enter your email: ');
    const password = readlineSync.question('Enter your password: ', { hideEchoBack: true });

    // Retrieve users from storage
    const users = storage.getUsers();
    const user = users.find(u => u.email === email);

    // Validate login
    if (user && auth.comparePassword(password, user.password)) {
        console.log('Login successful!');
        menu.userMenu();
    } else {
        console.log('Invalid email or password.');
    }
}

module.exports = { registerUser, loginUser };
