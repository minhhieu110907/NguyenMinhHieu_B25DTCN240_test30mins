let students,
  string = "Quý, Nam, Lan, Hùng, Nam", output = "", message = "", reversedArray = [];

students = string.split(", ");
let i = 1;
for (let student of students) {
  output +=`${i}. ${student}\n`;
  i++;
}

alert(output);

i = 1;
reversedArray = [...students].reverse();
for (let student of reversedArray) {
  message +=`${i}. ${student}\n`;
  i++;
}
alert(message);

existedName = students.includes("Lan") ? alert("Tên Lan tồn tại trong mảng") : alert("Tên Lan không tồn tại trong mảng");

index = students.indexOf("Nam");
alert(index);
