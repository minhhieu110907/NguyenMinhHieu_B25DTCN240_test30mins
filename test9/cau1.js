let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];

let orderReports = orders.map((order, index) => {
    return `${order} mang về ${revenues[index]} USD`;
});

console.log("--- Danh sách báo cáo ---");
console.log(orderReports);

let totalValidRevenue = revenues
    .filter(revenue => revenue > 0) 
    .reduce((total, revenue) => total + revenue, 0); 

console.log("--- Thống kê doanh thu ---");
console.log(`Tổng doanh thu của các đơn hàng hợp lệ là: ${totalValidRevenue}`);
