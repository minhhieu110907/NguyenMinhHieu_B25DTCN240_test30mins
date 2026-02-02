let n;
do {
  n = +prompt("Nhập vào một số nguyên ");
  if (!Number.isInteger(n)) {
    alert("Số nhập vào không hợp lệ. Nhập lại số");
  }
} while (!Number.isInteger(n));

if ( n % 2 === 0 ) {
    alert(`${n} là số chẵn`);
} else {
    alert(`${n} là số lẻ`);
}

if (n > 0) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i + " ";
  }
  alert(`Các số từ 1 đến ${n} là: ${result}`);
} else {
  alert("Giá trị n không hợp lệ để tạo dãy số");
}
