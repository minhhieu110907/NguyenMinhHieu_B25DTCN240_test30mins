let price = [100, 200, 300, 400], indexMessage = "", elementMessage = "",sum = 0;
for ( let index in price){
    indexMessage += index + " ";
}
alert(`Các index trong mảng: ${indexMessage}`);

for ( let element of price) {
    elementMessage += element + " ";
}
alert(`Các phần tử trong mảng: ${elementMessage}`);

for ( let i = 0; i < price.length; i++){
    if ( i % 2 === 0) {
        sum += price[i];
    }
}
alert(`Tổng các phần tử ở index chẵn là: ${sum}`);
