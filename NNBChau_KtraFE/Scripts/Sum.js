<script>
// Hàm tính tổng số lượng mặt hàng
    function updateCartQuantity() {
    // Lấy tất cả các ô nhập số lượng
    const quantityInputs = document.querySelectorAll('.quantity-input');
    let totalQuantity = 0;

    // Tính tổng số lượng
    quantityInputs.forEach(input => {
        totalQuantity += parseInt(input.value); // Chuyển giá trị từ chuỗi sang số nguyên và cộng dồn
    });

    // Cập nhật số lượng trên biểu tượng giỏ hàng
    const cartBadge = document.getElementById('cart-badge');
    cartBadge.textContent = totalQuantity;
}

    // Gọi hàm cập nhật khi trang tải xong
    window.onload = updateCartQuantity;

// Lắng nghe sự kiện khi người dùng thay đổi số lượng
document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', updateCartQuantity);
});

// Xử lý nút tăng và giảm số lượng
document.querySelectorAll('.btn-decrease').forEach(button => {
        button.addEventListener('click', function () {
            const input = this.nextElementSibling;
            if (input.value > 1) {
                input.value--;
                updateCartQuantity();
            }
        });
});

document.querySelectorAll('.btn-increase').forEach(button => {
        button.addEventListener('click', function () {
            const input = this.previousElementSibling;
            input.value++;
            updateCartQuantity();
        });
});
</script>