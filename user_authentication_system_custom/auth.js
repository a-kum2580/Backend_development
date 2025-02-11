const bcrypt = require('bcryptjs');

// Hash the password
function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

// Compare password with stored hash
function comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}

module.exports = { hashPassword, comparePassword };
