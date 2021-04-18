function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') return str;

    let charArray = str.split('');
    let reverseCharArray = []
    for (let i = charArray.length - 1; i >= 0; i--) {
        reverseCharArray.push(charArray[i]);
    }
    return reverseCharArray.join('');
}

function reverse2(str) {
    if (!str || str.length < 2 || typeof str !== 'string') return str;
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

console.log(reverse('Karr is Awesome!'));
console.log(reverse2('Awesome!'));
console.log(reverse3('Aweee'));
console.log(reverse(1234));