const readlineSync = require('readline-sync');
const userModule = require('./user');

function userMenu() {
    console.log('\nWelcome to the User Menu!');
    console.log('1. View Profile');
    console.log('2. Logout');
    console.log('3. Exit');

    const choice = readlineSync.question('Choose an option: ');

    switch (choice) {
        case '1':
            viewProfile();
            break;
        case '2':
            logout();
            break;
        case '3':
            process.exit();
            break;
        default:
            console.log('Invalid option. Try again.');
            userMenu();
    }
}

// Simulated View Profile function
function viewProfile() {
    console.log('Displaying user profile...');
    userMenu();
}

// Logout and return to login
function logout() {
    console.log('Logging out...');
    userModule.loginUser();
}

module.exports = { userMenu };
