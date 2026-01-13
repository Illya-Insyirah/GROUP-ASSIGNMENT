let cart = [];
let total = 0;

function addToCart(productName, price) {
    // Masukkan data ke dalam array cart
    cart.push({ name: productName, price: price });
    total += price;

    // Kemaskini paparan
    updateUI();
    
    // Notifikasi kecil
    alert(productName + " added to basket!");
}

function updateUI() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total');

    // Kosongkan list lama sebelum tulis yang baru
    cartList.innerHTML = "";

    cart.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${item.name}</span> <strong>RM ${item.price.toFixed(2)}</strong>`;
        cartList.appendChild(li);
    });

    totalDisplay.innerText = total.toFixed(2);
}

function clearCart() {
    if(confirm("Do You Want Clear Your Cart ?")) {
        cart = [];
        total = 0;
        updateUI();
    }
}

function checkoutWhatsApp() {
    const total = document.getElementById('cart-total').innerText;
    
    
    if (total === "0.00") {
        alert("Your cart is empty. Please add products first!");
        return;
    }

    const phone = "601121554470"; 
    const message = `Helo Sobella Wall! Saya ingin membeli produk dengan jumlah keseluruhan RM ${total}.`;
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}