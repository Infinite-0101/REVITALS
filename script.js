/* --- CONFIGURATION --- */
const whatsappNumber = "919920799976"; 
        // 1. THE PRODUCT DATA
const products = [
    {
        id: 0,
        name: "Refuel",
        price: 60,
        img: "assets/blue.png",
        color: "#00e5ff",
        desc: "The original classic. Blue Raspberry flavor engineered for rapid hydration.",
    },
    {
        id: 1,
        name: "Crimson Punch",
        price: 60,
        img: "assets/red.png",
        color: "#ff0040",
        desc: "A knockout blend of Strawberry and Dragonfruit.",
    },
    {
        id: 2,
        name: "Citrus Charge",
        price: 60,
        img: "assets/orange.png",
        color: "#ff9100",
        desc: "Zesty Orange and Tangerine fusion. Vitamin C powerhouse.",
    },
    {
        id: 3,
        name: "Gravity Grape",
        price: 65,
        img: "assets/purple.png",
        color: "#bf00ff",
        desc: "Defy gravity with this heavy-hitting Concord Grape flavor.",
    },
    {
        id: 4,
        name: "Arctic Ice",
        price: 70,
        img: "assets/ice.png",
        color: "#ccffff",
        desc: "A crisp blast of White Cherry and Glacier Mint.",
    },
    {
        id: 5,
        name: "Lime Strike",
        price: 60,
        img: "assets/green.png",
        color: "#aeff00",
        desc: "Sharp, sour, and electric Lemon-Lime shock.",
    },
    {
        id: 6,
        name: "Nebula Nectar",
        price: 80,
        img: "assets/nebula.png",
        color: "#aa00ff",
        desc: "A cosmic mystery flavor. Tastes like a mix of berries from another galaxy.",
    },
    {
        id: 7,
        name: "Cherry Bomb",
        price: 65,
        img: "assets/cherry.png",
        color: "#880000",
        desc: "Explosive Black Cherry flavor. High caffeine content.",
    },
    {
        id: 8,
        name: "Solar Fire",
        price: 65,
        img: "assets/fire.png",
        color: "#ff4d00",
        desc: "Spicy Mango and Chili. Heat-infused tropical blend.",
    },
    {
        id: 9,
        name: "Watermelon Wave",
        price: 60,
        img: "assets/watermelon.png",
        color: "#ff0066",
        desc: "Sweet, juicy watermelon with a hint of cucumber.",
    }
];

// 2. THE MISSING CODE (This puts the products on screen)
const productContainer = document.querySelector('.pro-container');

if (productContainer) {
    productContainer.innerHTML = ''; // Clear existing content
    
    products.forEach(product => {
        // Create the card
        const card = document.createElement('div');
        card.classList.add('pro');
        
        // Fill the card with HTML
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="des">
                <span>ReVitals</span>
                <h5>${product.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${product.price}</h4>
            </div>
            <a href="#" class="cart-btn" onclick="addToCart(${product.id})"><i class="fal fa-shopping-cart cart"></i></a>
        `;
        
        // Add card to the container
        productContainer.appendChild(card);
    });
} else {
    console.error("Could not find the product container!");
}

// 3. CART FUNCTION (Keeps your cart working)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(product.name + " added to cart!");
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartIcon = document.querySelector('#lg-bag span') || document.querySelector('.mobile-cart-icon'); 
    if(cartIcon) cartIcon.innerText = count;
}

// Run cart count on load
updateCartCount();
// 1. THE PRODUCT DATA
const products = [
    {
        id: 0,
        name: "Refuel",
        price: 60,
        img: "assets/blue.png",
        color: "#00e5ff",
        desc: "The original classic. Blue Raspberry flavor engineered for rapid hydration.",
    },
    {
        id: 1,
        name: "Crimson Punch",
        price: 60,
        img: "assets/red.png",
        color: "#ff0040",
        desc: "A knockout blend of Strawberry and Dragonfruit.",
    },
    {
        id: 2,
        name: "Citrus Charge",
        price: 60,
        img: "assets/orange.png",
        color: "#ff9100",
        desc: "Zesty Orange and Tangerine fusion. Vitamin C powerhouse.",
    },
    {
        id: 3,
        name: "Gravity Grape",
        price: 65,
        img: "assets/purple.png",
        color: "#bf00ff",
        desc: "Defy gravity with this heavy-hitting Concord Grape flavor.",
    },
    {
        id: 4,
        name: "Arctic Ice",
        price: 70,
        img: "assets/ice.png",
        color: "#ccffff",
        desc: "A crisp blast of White Cherry and Glacier Mint.",
    },
    {
        id: 5,
        name: "Lime Strike",
        price: 60,
        img: "assets/green.png",
        color: "#aeff00",
        desc: "Sharp, sour, and electric Lemon-Lime shock.",
    },
    {
        id: 6,
        name: "Nebula Nectar",
        price: 80,
        img: "assets/nebula.png",
        color: "#aa00ff",
        desc: "A cosmic mystery flavor. Tastes like a mix of berries from another galaxy.",
    },
    {
        id: 7,
        name: "Cherry Bomb",
        price: 65,
        img: "assets/cherry.png",
        color: "#880000",
        desc: "Explosive Black Cherry flavor. High caffeine content.",
    },
    {
        id: 8,
        name: "Solar Fire",
        price: 65,
        img: "assets/fire.png",
        color: "#ff4d00",
        desc: "Spicy Mango and Chili. Heat-infused tropical blend.",
    },
    {
        id: 9,
        name: "Watermelon Wave",
        price: 60,
        img: "assets/watermelon.png",
        color: "#ff0066",
        desc: "Sweet, juicy watermelon with a hint of cucumber.",
    }
];

// 2. THE MISSING CODE (This puts the products on screen)
const productContainer = document.querySelector('.pro-container');

if (productContainer) {
    productContainer.innerHTML = ''; // Clear existing content
    
    products.forEach(product => {
        // Create the card
        const card = document.createElement('div');
        card.classList.add('pro');
        
        // Fill the card with HTML
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="des">
                <span>ReVitals</span>
                <h5>${product.name}</h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>$${product.price}</h4>
            </div>
            <a href="#" class="cart-btn" onclick="addToCart(${product.id})"><i class="fal fa-shopping-cart cart"></i></a>
        `;
        
        // Add card to the container
        productContainer.appendChild(card);
    });
} else {
    console.error("Could not find the product container!");
}

// 3. CART FUNCTION (Keeps your cart working)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(product.name + " added to cart!");
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const cartIcon = document.querySelector('#lg-bag span') || document.querySelector('.mobile-cart-icon'); 
    if(cartIcon) cartIcon.innerText = count;
}

// Run cart count on load
updateCartCount();
