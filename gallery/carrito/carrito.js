document.addEventListener("DOMContentLoaded", function () {
    const btnAddToCart = document.querySelectorAll(".btn-add-cart");
    const cartIcon = document.querySelector(".icon-cart");
    const cartCounter = document.getElementById("contador-productos");
    const cartProducts = document.querySelector(".container-cart-products");
    const cartTotal = document.querySelector(".cart-total");
    const cartEmptyMessage = document.querySelector(".cart-empty");
    const btnCart = document.querySelector('.container-cart-icon');
    const containerCartProducts = document.querySelector('.container-cart-products');
    const cartInfo = document.querySelector('.cart-product');
    const rowProduct = document.querySelector('.row-product');
    const productsList = document.querySelector('.container-items');


    btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden-cart');
    });

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

    // Función calculo
    function calculateTotal() {
        totalAmount = productsInCart.reduce((total, product) => total + product.price, 0);
        cartTotal.querySelector(".total-pagar").textContent = totalAmount.toFixed(2) + " €";
        cartTotal.style.display = "block";
    }

    //Función carrito items
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
                        <span class="precio-producto-carrito">${product.price.toFixed(2)} €</span>
                    </div>
                    // <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="/* icon-clo */se">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>`;
            cartList.appendChild(item);
        });
    }
});

//nuevo
// const btnCart = document.querySelector('.container-cart-icon');
// const containerCartProducts = document.querySelector(
//     '.container-cart-products'
// );

// btnCart.addEventListener('click', () => {
//     containerCartProducts.classList.toggle('hidden-cart');
// });

// // /* ========================= */
// const cartInfo = document.querySelector('.cart-product');
// const rowProduct = document.querySelector('.row-product');

// // // Lista de todos los contenedores de productos
// const productsList = document.querySelector('.container-items');

// // // Variable de arreglos de Productos
// let allProducts = [];

// const valorTotal = document.querySelector('.total-pagar');

// const countProducts = document.querySelector('#contador-productos');

// const cartEmpty = document.querySelector('.cart-empty');
// const cartTotal = document.querySelector('.cart-total');

// productsList.addEventListener('click', e => {
//     if (e.target.classList.contains('btn-add-cart')) {
//         const product = e.target.parentElement;

//         const infoProduct = {
//             quantity: 1,
//             title: product.querySelector('h2').textContent,
//             price: product.querySelector('p').textContent,
//         };

//         const exits = allProducts.some(
//             product => product.title === infoProduct.title
//         );

//         if (exits) {
//             const products = allProducts.map(product => {
//                 if (product.title === infoProduct.title) {
//                     product.quantity++;
//                     return product;
//                 } else {
//                     return product;
//                 }
//             });
//             allProducts = [...products];
//         } else {
//             allProducts = [...allProducts, infoProduct];
//         }

//         showHTML();
//     }
// });

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
        );

        console.log(allProducts);

        showHTML();
    }
});

// // // Funcion para mostrar  HTML
// const showHTML = () => {
//     if (!allProducts.length) {
//         cartEmpty.classList.remove('hidden');
//         rowProduct.classList.add('hidden');
//         cartTotal.classList.add('hidden');
//     } else {
//         cartEmpty.classList.add('hidden');
//         rowProduct.classList.remove('hidden');
//         cartTotal.classList.remove('hidden');
//     }
// }

// 	// Limpiar HTML
// 	rowProduct.innerHTML = '';

// 	let total = 0;
// 	let totalOfProducts = 0;

// 	allProducts.forEach(product => {
// 		const containerProduct = document.createElement('div');
// 		containerProduct.classList.add('cart-product');

// 		containerProduct.innerHTML = `
//             < div class="info-cart-product" >
//                 <span class="cantidad-producto-carrito">${product.quantity}</span>
//                 <p class="titulo-producto-carrito">${product.title}</p>
//                 <span class="precio-producto-carrito">${product.price}</span>
//             </ >
//             <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 class="icon-close"
//             >
//                 <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                 />
//             </svg>
//         `;

// 		rowProduct.append(containerProduct);

// 		total =
// 			total + parseInt(product.quantity * product.price.slice(1));
// 		totalOfProducts = totalOfProducts + product.quantity;
// 	});

	valorTotal.innerText = $${total};
	countProducts.innerText = totalOfProducts;
};

