// ========================================
// FaceAtlas - Main JavaScript
// ========================================

// ========================================
// Navigation Scroll Effect
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled', 'shadow-sm');
            } else {
                navbar.classList.remove('scrolled', 'shadow-sm');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Trigger on load in case of page refresh
    }
});

// ========================================
// Face Map Data & Interaction
// ========================================
const faceZoneData = {
    forehead: {
        title: 'Forehead',
        issues: [
            { name: 'Forehead Acne', icon: '!' },
            { name: 'Fine Lines & Wrinkles', icon: '~' },
            { name: 'Excess Oil', icon: '💧' },
            { name: 'Dry Patches', icon: '🍂' }
        ],
        tips: 'Use non-comedogenic products. Consider salicylic acid for acne-prone areas. Apply sunscreen daily to prevent premature aging.',
        suggestedProducts: ['cleanser', 'serum', 'sunscreen']
    },
    nose: {
        title: 'Nose (T-Zone)',
        issues: [
            { name: 'Blackheads', icon: '•' },
            { name: 'Enlarged Pores', icon: '○' },
            { name: 'Excess Sebum', icon: '💧' },
            { name: 'Sebaceous Filaments', icon: '∙' }
        ],
        tips: 'Use BHA (salicylic acid) to unclog pores. Clay masks can help absorb excess oil. Avoid over-stripping with harsh cleansers.',
        suggestedProducts: ['cleanser', 'mask', 'toner']
    },
    'left-cheek': {
        title: 'Left Cheek',
        issues: [
            { name: 'Cheek Acne', icon: '!' },
            { name: 'Rosacea', icon: '🔴' },
            { name: 'Hyperpigmentation', icon: '◐' },
            { name: 'Texture Issues', icon: '≋' }
        ],
        tips: 'Check pillowcase cleanliness. Consider azelaic acid for redness. Use niacinamide for pigmentation concerns.',
        suggestedProducts: ['cleanser', 'serum', 'moisturizer']
    },
    'right-cheek': {
        title: 'Right Cheek',
        issues: [
            { name: 'Cheek Acne', icon: '!' },
            { name: 'Rosacea', icon: '🔴' },
            { name: 'Hyperpigmentation', icon: '◐' },
            { name: 'Texture Issues', icon: '≋' }
        ],
        tips: 'Check pillowcase cleanliness. Consider azelaic acid for redness. Use niacinamide for pigmentation concerns.',
        suggestedProducts: ['cleanser', 'serum', 'moisturizer']
    },
    'under-eyes': {
        title: 'Under Eyes',
        issues: [
            { name: 'Dark Circles', icon: '●' },
            { name: 'Puffiness', icon: '👁' },
            { name: 'Fine Lines', icon: '~' },
            { name: 'Milia', icon: '∘' }
        ],
        tips: 'Use gentle, fragrance-free eye cream. Get adequate sleep. Apply cold compresses for puffiness. Use SPF to prevent further damage.',
        suggestedProducts: ['eyecream', 'serum']
    },
    chin: {
        title: 'Chin & Jawline',
        issues: [
            { name: 'Hormonal Acne', icon: '!' },
            { name: 'Ingrown Hairs', icon: '⌖' },
            { name: 'Dryness', icon: '🍂' },
            { name: 'Double Chin', icon: '⌄' }
        ],
        tips: 'Track breakouts with menstrual cycle. Avoid touching face. Use benzoyl peroxide for active breakouts. Consider retinoids for texture.',
        suggestedProducts: ['cleanser', 'retinol', 'moisturizer']
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const faceZones = document.querySelectorAll('.face-zone');
    const infoPanel = document.getElementById('infoPanel');

    if (faceZones.length && infoPanel) {
        faceZones.forEach(zone => {
            zone.addEventListener('click', function () {
                faceZones.forEach(z => z.classList.remove('active'));
                this.classList.add('active');

                const zoneKey = this.getAttribute('data-zone');
                const data = faceZoneData[zoneKey];

                if (data) {
                    updateInfoPanel(data, zoneKey);
                }
            });
        });
    }
});

function updateInfoPanel(data, zoneKey) {
    const infoPanel = document.getElementById('infoPanel');
    if (!infoPanel) return;

    infoPanel.innerHTML = `
        <h3 class="fs-4 text-uppercase mb-3">${data.title}</h3>
        <p class="fw-bold text-uppercase mb-2 small">Common Issues</p>
        <ul class="list-unstyled mb-4">
            ${data.issues.map(issue => `
                <li class="d-flex align-items-center gap-2 mb-2 pb-2 border-bottom">
                    <span class="d-flex align-items-center justify-content-center bg-danger text-white rounded-circle" style="width: 28px; height: 28px; font-size: 12px;">${issue.icon}</span>
                    ${issue.name}
                </li>
            `).join('')}
        </ul>
        <div class="bg-light p-3 rounded-4 mb-4">
            <h4 class="font-mono small text-uppercase mb-2 text-secondary">Care Tips</h4>
            <p class="small mb-0">${data.tips}</p>
        </div>
        <button class="btn btn-primary w-100 rounded-pill py-2" onclick="openSuggestedProducts('${zoneKey}')">
            See Suggested Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="ms-2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
    `;

    infoPanel.style.opacity = '0';
    infoPanel.style.transform = 'translateY(10px)';
    setTimeout(() => {
        infoPanel.style.transition = 'all 0.3s ease';
        infoPanel.style.opacity = '1';
        infoPanel.style.transform = 'translateY(0)';
    }, 50);
}

function openSuggestedProducts(zoneKey) {
    const data = faceZoneData[zoneKey];
    if (!data) return;

    const overlay = document.getElementById('sidePanelOverlay');
    const panel = document.getElementById('sidePanel');
    const content = document.getElementById('sidePanelContent');

    const suggestedProducts = data.suggestedProducts.map(id => products.find(p => p.id === id)).filter(Boolean);

    content.innerHTML = `
        <div class="bg-light p-3 rounded-3 mb-4">
            <h4 class="font-mono small text-uppercase text-secondary mb-1">Selected Area</h4>
            <p class="fw-bold mb-0">${data.title}</p>
        </div>
        <p class="small text-secondary mb-4">Curated products to address common concerns in this area:</p>
        <div class="d-flex flex-column gap-3">
            ${suggestedProducts.map(product => `
                <div class="card border-0 shadow-sm rounded-4 overflow-hidden" onclick="openProductModal('${product.id}')" style="cursor: pointer;">
                    <div class="d-flex">
                        <img src="${product.image}" alt="${product.name}" style="width: 100px; object-fit: cover;">
                        <div class="card-body p-3">
                            <span class="badge bg-danger mb-2">${product.category}</span>
                            <h6 class="mb-1">${product.name}</h6>
                            <p class="small text-secondary mb-0">${product.shortDesc}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    overlay.classList.add('active');
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSidePanel() {
    const overlay = document.getElementById('sidePanelOverlay');
    const panel = document.getElementById('sidePanel');
    if (overlay && panel) {
        overlay.classList.remove('active');
        panel.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ========================================
// Products Loading & Shop Logic
// ========================================
let products = [];

async function loadProducts() {
    try {
        // Dynamic path based on whether we are in /pages/ or root
        const basePath = window.location.pathname.includes('/pages/') ? '../' : './';
        const response = await fetch(basePath + 'data/products.json');
        
        if (!response.ok) throw new Error('Failed to load products.json');
        products = await response.json();
        
        const shopGrid = document.getElementById('shopProductsGrid');
        if (shopGrid) {
            renderShopProducts(products);
            updateFilterCounts();
        }
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProducts);

// Search & Filter
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('shopSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            filterProducts(this.value.toLowerCase());
        });
    }

    const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => filterProducts());
    });
});

function filterProducts(searchQuery = '') {
    const searchInput = document.getElementById('shopSearch');
    if (searchInput && !searchQuery) {
        searchQuery = searchInput.value.toLowerCase();
    }

    const selectedCategories = Array.from(document.querySelectorAll('.filter-category:checked')).map(cb => cb.value);
    const selectedBrands = Array.from(document.querySelectorAll('.filter-brand:checked')).map(cb => cb.value);

    let filtered = products.filter(product => {
        const matchesSearch = !searchQuery ||
            product.name.toLowerCase().includes(searchQuery) ||
            product.brand.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery);

        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);

        return matchesSearch && matchesCategory && matchesBrand;
    });

    renderShopProducts(filtered);
}

function renderShopProducts(productsToRender) {
    const productGrid = document.getElementById('shopProductsGrid');
    if (!productGrid) return;

    if (productsToRender.length === 0) {
        productGrid.innerHTML = `
            <div class="col-12 text-center p-5">
                <p class="text-secondary">No products found matching your criteria.</p>
            </div>
        `;
        return;
    }

    productGrid.innerHTML = productsToRender.map(product => `
        <div class="col-sm-6 col-md-4 col-xl-3">
            <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden shop-product-card" onclick="openProductModal('${product.id}')" style="cursor: pointer; transition: transform 0.3s, box-shadow 0.3s;">
                <img src="${product.image}" alt="${product.name}" class="card-img-top" style="aspect-ratio: 1; object-fit: cover;">
                <div class="card-body p-3 d-flex flex-column">
                    <p class="font-mono text-secondary small text-uppercase mb-1" style="font-size:10px;">${product.brand}</p>
                    <h4 class="fs-6 mb-2 flex-grow-1">${product.name}</h4>
                    <p class="text-danger fw-bold mb-0">PHP ${product.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function updateFilterCounts() {
    const categoryCheckboxes = document.querySelectorAll('.filter-category');
    const brandCheckboxes = document.querySelectorAll('.filter-brand');

    categoryCheckboxes.forEach(checkbox => {
        const count = products.filter(p => p.category === checkbox.value).length;
        const countSpan = checkbox.closest('.filter-option').querySelector('.filter-count');
        if (countSpan) countSpan.textContent = `(${count})`;
    });

    brandCheckboxes.forEach(checkbox => {
        const count = products.filter(p => p.brand === checkbox.value).length;
        const countSpan = checkbox.closest('.filter-option').querySelector('.filter-count');
        if (countSpan) countSpan.textContent = `(${count})`;
    });
}

// ========================================
// Product Modal
// ========================================
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const overlay = document.getElementById('productModalOverlay');
    const modalContent = document.getElementById('productModalContent');

    modalContent.innerHTML = `
        <div class="row g-0">
            <button class="btn btn-light position-absolute rounded-circle p-2 d-flex align-items-center justify-content-center" onclick="closeProductModal()" style="top: 15px; right: 15px; width: 40px; height: 40px; z-index: 10;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            <div class="col-md-5 bg-light d-flex align-items-center justify-content-center p-4">
                <img src="${product.image}" alt="${product.name}" class="img-fluid rounded-4 shadow-sm" style="max-width: 300px;">
            </div>
            <div class="col-md-7 p-4 p-md-5">
                <p class="font-mono small text-uppercase text-secondary mb-2">${product.brand}</p>
                <h2 class="fs-3 fw-bold mb-3">${product.name}</h2>
                <p class="fs-4 fw-bold text-danger mb-4">PHP ${product.price.toFixed(2)}</p>
                <p class="text-secondary mb-4">${product.fullDesc}</p>
                
                <h4 class="font-mono small text-uppercase mb-2">Key Benefits</h4>
                <ul class="list-unstyled mb-4">
                    ${product.benefits.map(b => `<li class="d-flex align-items-center gap-2 mb-1"><span class="text-danger">•</span><span class="small text-secondary">${b}</span></li>`).join('')}
                </ul>
                
                <h4 class="font-mono small text-uppercase mb-2">Key Ingredients</h4>
                <p class="small text-secondary mb-4">${product.ingredients}</p>
                
                <h4 class="font-mono small text-uppercase mb-2">Best For</h4>
                <p class="small text-secondary mb-4">${product.skinType}</p>
                
                <button class="btn btn-primary w-100 rounded-pill py-3 d-flex align-items-center justify-content-center gap-2" onclick="addToCart('${product.id}')">
                    Add to Cart
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6L5 3H2"/></svg>
                </button>
            </div>
        </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const overlay = document.getElementById('productModalOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const modalOverlay = document.getElementById('productModalOverlay');
    const sidePanelOverlay = document.getElementById('sidePanelOverlay');

    if (modalOverlay) modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeProductModal(); });
    if (sidePanelOverlay) sidePanelOverlay.addEventListener('click', e => { if (e.target === sidePanelOverlay) closeSidePanel(); });
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeProductModal();
        closeSidePanel();
        closeCart();
    }
});

// ========================================
// Shopping Cart
// ========================================
let cart = [];

document.addEventListener('DOMContentLoaded', function () {
    const savedCart = localStorage.getItem('faceAtlasCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartBadge();
    }
});

function saveCart() {
    localStorage.setItem('faceAtlasCart', JSON.stringify(cart));
    updateCartBadge();
    renderCart();
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    if (totalItems > 0) badge.classList.add('show');
    else badge.classList.remove('show');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) existingItem.quantity += 1;
    else {
        cart.push({ id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.image, quantity: 1 });
    }

    saveCart();
    alert(`Added ${product.name} to your cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) removeFromCart(productId);
    else saveCart();
}

function openCart() {
    const overlay = document.getElementById('cartOverlay');
    const panel = document.getElementById('cartPanel');
    if(overlay && panel) {
        renderCart();
        overlay.classList.add('active');
        panel.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCart() {
    const overlay = document.getElementById('cartOverlay');
    const panel = document.getElementById('cartPanel');
    if(overlay && panel) {
        overlay.classList.remove('active');
        panel.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function renderCart() {
    const content = document.getElementById('cartContent');
    const footer = document.getElementById('cartFooter');
    if(!content || !footer) return;

    if (cart.length === 0) {
        content.innerHTML = `
            <div class="text-center p-5 text-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width: 64px; height: 64px; opacity: 0.5; margin-bottom: 1rem;">
                    <path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M6 6L5 3H2"/>
                </svg>
                <p class="mb-1">Your cart is empty</p>
                <small>Add some products to get started!</small>
            </div>
        `;
        footer.innerHTML = '';
        return;
    }

    content.innerHTML = cart.map(item => `
        <div class="d-flex gap-3 py-3 border-bottom">
            <img src="${item.image}" alt="${item.name}" class="rounded-3 object-fit-cover" style="width: 80px; height: 80px; background: #f8f9fa;">
            <div class="d-flex flex-column justify-content-between flex-grow-1">
                <div>
                    <h6 class="mb-0 fs-6">${item.name}</h6>
                    <small class="text-secondary">${item.brand}</small>
                    <div class="text-danger fw-bold small mt-1">PHP ${(item.price * item.quantity).toFixed(2)}</div>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <div class="d-flex align-items-center border rounded-pill px-2 py-1 gap-2">
                        <button class="btn btn-sm text-secondary p-0" onclick="updateQuantity('${item.id}', -1)" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                        <span class="small fw-bold" style="min-width: 20px; text-align: center;">${item.quantity}</span>
                        <button class="btn btn-sm text-secondary p-0" onclick="updateQuantity('${item.id}', 1)">+</button>
                    </div>
                    <button class="btn btn-sm text-danger p-1" onclick="removeFromCart('${item.id}')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
                </div>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    footer.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-secondary small">Subtotal (${totalItems} items)</span>
            <strong class="fs-5">PHP ${subtotal.toFixed(2)}</strong>
        </div>
        <button class="btn btn-primary w-100 rounded-pill py-3" onclick="checkout()">Checkout</button>
    `;
}

function checkout() {
    if (cart.length === 0) return;
    alert(`Thank you for your order! Total: PHP ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}`);
    cart = [];
    saveCart();
    closeCart();
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
            setTimeout(() => {
                contactForm.innerHTML = `
                    <div class="text-center py-5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:64px;height:64px;color:var(--fa-accent);margin-bottom:1rem;">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <h4>Message Sent!</h4>
                        <p class="text-secondary small">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    </div>
                `;
            }, 1000);
        });
    }
});