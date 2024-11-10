document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;
    const cart = [];

    // Add event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const productElement = event.target.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.getAttribute('data-name');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));

            // Add product to cart array and update UI
            cart.push({ id: productId, name: productName, price: productPrice });
            updateCartUI();
        });
    });

    function updateCartUI() {
        cartItems.innerHTML = '';
        total = 0;
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(cartItem);
            total += item.price;
        });
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }
});
