// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
    return str.split('').reverse().join('');
}

function reverse2(str) {
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, char) => char + reversed, '');
}
reverse('ooooonnnnn');

module.exports = reverse;
