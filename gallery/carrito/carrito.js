document.addEventListener("DOMContentLoaded", function () {
    const btnAddToCart = document.querySelectorAll(".btn-add-cart");
    const cartIcon = document.querySelector(".icon-cart");
    const cartCounter = document.getElementById("contador-productos");
    const cartProducts = document.querySelector(".container-cart-products");
    const cartTotal = document.querySelector(".cart-total");
    const cartEmptyMessage = document.querySelector(".cart-empty");

    let productsInCart = [];
    let totalAmount = 0;

    // Event listener for adding items to the cart
    btnAddToCart.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            const productInfo = getProductInfo(index);
            productsInCart.push(productInfo);
            updateCart();
        });
    });

    // Function to get product information
    function getProductInfo(index) {
        const item = document.querySelectorAll(".item")[index];
        const productName = item.querySelector("h2").textContent;
        const productPrice = parseFloat(item.querySelector(".price").textContent.replace("€", ""));
        return { name: productName, price: productPrice };
    }

    // Function to update the cart
    function updateCart() {
        cartCounter.textContent = productsInCart.length;
        if (productsInCart.length > 0) {
            cartIcon.classList.add("active");
            cartEmptyMessage.style.display = "none";
            cartProducts.classList.remove("hidden-cart");
            calculateTotal();
            displayCartItems();
        } else {
            cartIcon.classList.remove("active");
            cartEmptyMessage.style.display = "block";
            cartProducts.classList.add("hidden-cart");
            cartTotal.style.display = "none";
        }
    }

    // Function to calculate total amount
    function calculateTotal() {
        totalAmount = productsInCart.reduce((total, product) => total + product.price, 0);
        cartTotal.querySelector(".total-pagar").textContent = totalAmount.toFixed(2) + "€";
        cartTotal.style.display = "block";
    }

    // Function to display cart items
    function displayCartItems() {
        const cartList = document.querySelector(".container-cart-products .hidden");
        cartList.innerHTML = "";
        productsInCart.forEach(product => {
            const item = document.createElement("div");
            item.classList.add("row-product");
            item.innerHTML = `
                <div class="cart-product">
                    <div class="info-cart-product">
                        <span class="cantidad-producto-carrito">1</span>
                        <p class="titulo-producto-carrito">${product.name}</p>
                        <span class="precio-producto-carrito">${product.price.toFixed(2)}€</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>`;
            cartList.appendChild(item);
        });
    }
});



