let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];

let filterRevenues = revenues.filter((price) => price > 0);
let totalProfit = filterRevenues.reduce((total,price => total + price,0));
alert(`Tổng doanh thu các đơn hàng phát sinh lãi là: ${totalProfit}`);


let cutOrder = orders.forEach(order => {
    let part1 = order.split(", ");
})

let cutRevenues = revenues.forEach(revenues => {
    let part2 = order.split(", ");
})

let orderReport = [];
