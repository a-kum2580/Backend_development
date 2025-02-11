const readlineSync = require('readline-sync');
const userModule = require('./user');

function startApp() {
    const action = readlineSync.question('Enter 1 to register or 2 to login: ');

    if (action === '1') {
        userModule.registerUser();
    } else if (action === '2') {
        userModule.loginUser();
    } else {
        console.log('Invalid choice. Exiting.');
        process.exit();
    }
}

startApp();
