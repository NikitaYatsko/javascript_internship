export function task8() {
    alert('please log in');

    let correctUsername = 'vitalik';
    let correctPassword = 'vitalik228';

    let currentUsername = prompt('write your username: ');
    let currentPassword = prompt('write your password: ');

    if (!currentUsername || !currentPassword) {
        alert('error');
    } else if (correctUsername === currentUsername && correctPassword === currentPassword) {
        alert('Welcome');
    } else if (correctUsername === currentUsername && correctPassword !== currentPassword) {
        alert('invalid password');
    } else if (correctUsername !== currentUsername) {
        alert('invalid username');
    } else {
        alert('error');
    }
}
