const fs = require('fs');

const FILE_PATH = 'users.json';

// Retrieve users from file
function getUsers() {
    if (fs.existsSync(FILE_PATH)) {
        return JSON.parse(fs.readFileSync(FILE_PATH));
    }
    return [];
}

// Save a new user
function saveUser(user) {
    const users = getUsers();
    users.push(user);
    fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
}

module.exports = { getUsers, saveUser };
