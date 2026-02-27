const products = [
{ id: "P01", name: "Laptop Macbook Pro M3", price: 2000, category: "Laptop", inStock: true},
{ id: "P02", name: "Chuột không dây Logitech", price: 45, category: "Phụ kiện", inStock: true},
{ id: "P03", name: "Bàn phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false},
{ id: "P04", name: "Màn hình Dell UltraSharp", price: 450, category: "Màn hình", inStock: true},
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true},
];


// lấy ra thông tin mã định danh P03
let findByID = prompt("Nhập vào ID sản phẩm bạn muốn tìm thông tin");
if (findByID === products[2].id){
    console.log(products[2]);
    alert("Vui lòng check kết quả ở F12");
} else {
    console.log(`Không tồn tại sản phầm có ID ${findByID}`);
    alert("Vui lòng check kết quả ở F12");
}

//Kiểm tra dữ liệu
let dataCheck = products.every(p => p.price > 0);
dataCheck ? console.log("Dữ liệu bảng giá hợp lệ") : console.log("Phát hiện sản phẩm chưa cập nhật giá");



//Chuẩn hóa dữ liệu hiển thị 
let status;
let catalogDisplay = products.map(p => {
    p.inStock === true ? status = "Còn hàng" : status = "Hết hàng";
    return [`${products.name} - Giá: ${products.price} - Trạng thái: ${status}`]
});
console.log(catalogDisplay);