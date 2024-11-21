let cart = [
    { id: 1, name: "Produk A", price: 50000, quantity: 2 },
    { id: 2, name: "Produk B", price: 75000, quantity: 1 }
];

function displayCart() {
    const cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = "";
    let total = 0;
    
    cart.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");
        itemDiv.innerHTML = `
            <span>${item.name} - Rp ${item.price} x ${item.quantity}</span>
            <button onclick="removeItem(${item.id})">Hapus</button>
        `;
        cartContainer.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    document.getElementById("total").textContent = total;
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    displayCart();
}

function goToCheckout() {
    window.location.href = "checkout.html";
}

displayCart();
