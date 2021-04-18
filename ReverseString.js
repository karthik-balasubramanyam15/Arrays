function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') return str;

    let charArray = str.split('');
    let reverseCharArray = []
    for (let i = charArray.length - 1; i >= 0; i--) {
        reverseCharArray.push(charArray[i]);
    }
    return reverseCharArray.join('');
}

console.log(reverse('Karr is Awesome!'));
console.log(reverse(1234));