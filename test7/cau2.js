let sum;
for ( let i = 1; i<=50; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        alert("FizzBuzz");
    } else if ( i % 3 === 0) {
        sum += i;
        alert("Fizz");
    } else if ( i % 5 === 0) {
        alert("Buzz");
    } else {
        alert(`${i}`);
    }
}
alert(`Tổng của tất cả các số đã in ra chữ "Fizz": ${sum} `);