function calculateLengths() {
    // Get values from input fields
    const totalLength = parseFloat(document.getElementById('totalLength').value);
    const b = parseFloat(document.getElementById('b').value);

    // Check if inputs are valid numbers
    if (isNaN(totalLength) || isNaN(b)  || totalLength <= 0 || b <= 0) {
        alert('Please enter valid numbers for  total length.');
        return;
    }

    // Calculate the lengths of m and n
    const lengthm = (3 / 5) * totalLength;
    const lengthn = (2 / 5) * totalLength;

    // Calculate length a using Pythagorean theorem: a = sqrt(b^2 + e^2)
    const lengthA = Math.sqrt(b * b + lengthm * lengthm);

    // Display result
    document.getElementById('result').innerText = `Length of n is ${lengthn.toFixed(2)} , Length of a is ${2*lengthA.toFixed(2)}`;
}
