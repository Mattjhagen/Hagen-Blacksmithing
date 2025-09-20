// Product Data
const products = [
    {
        id: 1,
        name: "Custom Fireplace Tools Set",
        category: "tools",
        price: 285.00,
        description: "Hand-forged fireplace tools including poker, shovel, brush, and tongs. Each piece is individually crafted for durability and beauty.",
        image: "🔥"
    },
    {
        id: 2,
        name: "Decorative Garden Gate",
        category: "decorative",
        price: 450.00,
        description: "Elegant wrought iron garden gate with intricate scrollwork. Customizable design to match your garden's aesthetic.",
        image: "🚪"
    },
    {
        id: 3,
        name: "Blacksmith Hammer Set",
        category: "tools",
        price: 125.00,
        description: "Professional-grade blacksmith hammers. Perfect for both beginners and experienced craftsmen.",
        image: "🔨"
    },
    {
        id: 4,
        name: "Wall Art - Tree of Life",
        category: "decorative",
        price: 195.00,
        description: "Beautiful wall-mounted iron tree sculpture. A stunning centerpiece for any room.",
        image: "🌳"
    },
    {
        id: 5,
        name: "Custom Knife",
        category: "custom",
        price: 350.00,
        description: "Hand-forged custom knife with wooden handle. Made to your specifications and preferences.",
        image: "🔪"
    },
    {
        id: 6,
        name: "Candle Holders Set",
        category: "decorative",
        price: 85.00,
        description: "Set of three hand-forged iron candle holders. Perfect for creating ambient lighting.",
        image: "🕯️"
    },
    {
        id: 7,
        name: "Garden Spade",
        category: "tools",
        price: 75.00,
        description: "Heavy-duty garden spade with ergonomic handle. Built to last through years of use.",
        image: "⛏️"
    },
    {
        id: 8,
        name: "Custom Railings",
        category: "custom",
        price: 650.00,
        description: "Custom wrought iron railings for stairs or balconies. Designed to match your home's architecture.",
        image: "🏠"
    },
    {
        id: 9,
        name: "Decorative Hooks Set",
        category: "decorative",
        price: 45.00,
        description: "Set of six decorative wall hooks. Perfect for coats, hats, or decorative items.",
        image: "🪝"
    },
    {
        id: 10,
        name: "Anvil",
        category: "tools",
        price: 425.00,
        description: "Professional blacksmith anvil. Essential tool for any serious metalworking project.",
        image: "⚒️"
    },
    {
        id: 11,
        name: "Prairie Village Gate",
        category: "custom",
        price: 750.00,
        description: "Custom gate designed for Prairie Village historical site. Features traditional North Dakota motifs and weather-resistant finish.",
        image: "🏛️"
    },
    {
        id: 12,
        name: "Farm Tool Set",
        category: "tools",
        price: 195.00,
        description: "Essential farm tools including pitchfork, shovel, and hoe. Built to withstand North Dakota's harsh weather conditions.",
        image: "🚜"
    },
    {
        id: 13,
        name: "North Dakota State Art",
        category: "decorative",
        price: 325.00,
        description: "Decorative wall art featuring North Dakota state symbols. Perfect for homes and businesses celebrating local heritage.",
        image: "🌾"
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const categoryBtns = document.querySelectorAll('.category-btn');
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const closeCart = document.querySelector('.close-cart');
const cartLink = document.querySelector('.cart-link');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartDisplay();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            filterProducts(category);
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Cart modal
    cartLink.addEventListener('click', function(e) {
        e.preventDefault();
        cartModal.style.display = 'block';
        updateCartDisplay();
    });

    closeCart.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

// Display Products
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #6c757d; font-size: 1.2rem;">No products found in this category.</p>';
        return;
    }

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            ${product.image}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
    return card;
}

// Filter Products
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
    updateCartDisplay();
    showMessage('Product added to cart!', 'success');
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
    showMessage('Product removed from cart!', 'success');
}

// Update Cart Display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = '0.00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity} × $${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-price">
                $${(item.price * item.quantity).toFixed(2)}
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                Remove
            </button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Save Cart to Local Storage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show Message
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert at the top of the page
    document.body.insertBefore(messageDiv, document.body.firstChild);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 3000);
}

// Handle Contact Form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
        e.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Checkout Function
function checkout() {
    if (cart.length === 0) {
        showMessage('Your cart is empty!', 'error');
        return;
    }
    
    // In a real application, this would redirect to a payment processor
    // For now, we'll simulate a successful checkout
    showMessage('Thank you for your order! We\'ll contact you soon to arrange payment and delivery.', 'success');
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartDisplay();
    cartModal.style.display = 'none';
}

// Add checkout event listener
document.addEventListener('DOMContentLoaded', function() {
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
});

// Search functionality (bonus feature)
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    displayProducts(filteredProducts);
}

// Add search input to header (optional enhancement)
function addSearchFeature() {
    const navMenu = document.querySelector('.nav-menu');
    const searchItem = document.createElement('li');
    searchItem.innerHTML = `
        <div style="position: relative;">
            <input type="text" id="search-input" placeholder="Search products..." 
                   style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 20px; width: 200px;">
            <button onclick="clearSearch()" style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer;">×</button>
        </div>
    `;
    
    // Insert before cart link
    navMenu.insertBefore(searchItem, navMenu.lastElementChild);
    
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function() {
        if (this.value.trim()) {
            searchProducts(this.value);
        } else {
            displayProducts(products);
        }
    });
}

function clearSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.value = '';
    displayProducts(products);
}

// Initialize search feature
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment the line below to enable search functionality
    // addSearchFeature();
});

// Lazy loading for images (when you add real images)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #d4af37;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
    `;
    
    scrollBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', addScrollToTopButton);
