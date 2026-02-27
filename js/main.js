// ========================================
// FaceAtlas - Main JavaScript
// ========================================

// ========================================
// Navigation Scroll Effect
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});

// ========================================
// Face Map Data
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

// ========================================
// Face Map Interaction
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const faceZones = document.querySelectorAll('.face-zone');
    const infoPanel = document.getElementById('infoPanel');
    
    if (faceZones.length && infoPanel) {
        faceZones.forEach(zone => {
            zone.addEventListener('click', function() {
                // Remove active class from all zones
                faceZones.forEach(z => z.classList.remove('active'));
                
                // Add active class to clicked zone
                this.classList.add('active');
                
                // Get zone data
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
    
    infoPanel.innerHTML = `
        <h3>${data.title}</h3>
        <p class="zone-title">Common Issues</p>
        <ul class="issues-list">
            ${data.issues.map(issue => `
                <li>
                    <span class="issue-icon">${issue.icon}</span>
                    ${issue.name}
                </li>
            `).join('')}
        </ul>
        <div class="tips">
            <h4>Care Tips</h4>
            <p>${data.tips}</p>
        </div>
        <button class="btn-primary suggested-products-btn" onclick="openSuggestedProducts('${zoneKey}')">
            See Suggested Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </button>
    `;
    
    // Animate panel update
    infoPanel.style.opacity = '0';
    infoPanel.style.transform = 'translateY(10px)';
    setTimeout(() => {
        infoPanel.style.transition = 'all 0.3s ease';
        infoPanel.style.opacity = '1';
        infoPanel.style.transform = 'translateY(0)';
    }, 50);
}

// ========================================
// Suggested Products Side Panel
// ========================================
function openSuggestedProducts(zoneKey) {
    const data = faceZoneData[zoneKey];
    if (!data) return;
    
    const overlay = document.getElementById('sidePanelOverlay');
    const panel = document.getElementById('sidePanel');
    const content = document.getElementById('sidePanelContent');
    
    // Get suggested products
    const suggestedProducts = data.suggestedProducts.map(id => products.find(p => p.id === id)).filter(Boolean);
    
    content.innerHTML = `
        <div class="side-panel-issue">
            <h4>Selected Area</h4>
            <p>${data.title}</p>
        </div>
        <p style="font-size: 14px; color: var(--fa-text-secondary); margin-bottom: 1.5rem;">
            Curated products to address common concerns in this area:
        </p>
        <div class="products-grid" style="grid-template-columns: 1fr;">
            ${suggestedProducts.map(product => `
                <div class="product-card" onclick="openProductModal('${product.id}')">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <span class="product-tag">${product.category}</span>
                        <h4>${product.name}</h4>
                        <p>${product.shortDesc}</p>
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
    
    overlay.classList.remove('active');
    panel.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// Products Data
// ========================================
const products = [
    {
        id: 'cleanser',
        name: 'Gentle Foam Cleanser',
        brand: 'Pure Skin',
        category: 'Cleanser',
        price: 24.00,
        image: '../img/product_cleanser.jpg',
        shortDesc: 'Removes makeup without stripping.',
        fullDesc: 'A luxurious foaming cleanser that gently removes makeup, dirt, and impurities without stripping your skin of its natural moisture. Formulated with hyaluronic acid and ceramides to maintain your skin barrier.',
        benefits: ['Gentle on sensitive skin', 'Non-stripping formula', 'pH balanced', 'Fragrance-free'],
        ingredients: 'Water, Glycerin, Hyaluronic Acid, Ceramides, Panthenol',
        skinType: 'All skin types'
    },
    {
        id: 'moisturizer',
        name: 'Barrier Repair Cream',
        brand: 'Derm Care',
        category: 'Moisturizer',
        price: 38.00,
        image: '../img/product_moisturizer.jpg',
        shortDesc: 'Rich, non-greasy recovery.',
        fullDesc: 'An intensive barrier repair cream that strengthens your skin\'s natural defense system. Rich yet non-greasy, it provides deep hydration while repairing damaged skin barriers.',
        benefits: ['Repairs skin barrier', 'Deep hydration', 'Non-comedogenic', 'Dermatologist tested'],
        ingredients: 'Ceramides, Niacinamide, Squalane, Peptides, Vitamin E',
        skinType: 'Dry, sensitive, compromised skin'
    },
    {
        id: 'sunscreen',
        name: 'Daily UV Fluid SPF 50',
        brand: 'Sun Shield',
        category: 'Sunscreen',
        price: 32.00,
        image: '../img/product_sunscreen.jpg',
        shortDesc: 'No white cast, breathable finish.',
        fullDesc: 'A lightweight, invisible sunscreen that provides broad-spectrum SPF 50 protection without the white cast. Its fluid texture absorbs quickly and works beautifully under makeup.',
        benefits: ['Invisible finish', 'Broad spectrum SPF 50', 'Works under makeup', 'Non-greasy'],
        ingredients: 'Zinc Oxide, Titanium Dioxide, Hyaluronic Acid, Vitamin E',
        skinType: 'All skin types'
    },
    {
        id: 'serum',
        name: 'Vitamin C Brightening Serum',
        brand: 'Glow Labs',
        category: 'Serum',
        price: 45.00,
        image: '../img/product_serum.jpg',
        shortDesc: 'Brightens and evens skin tone.',
        fullDesc: 'A potent 15% Vitamin C serum that brightens dark spots, evens skin tone, and provides antioxidant protection. Formulated with ferulic acid for enhanced stability and efficacy.',
        benefits: ['Brightens dark spots', 'Antioxidant protection', 'Boosts collagen', 'Improves texture'],
        ingredients: '15% L-Ascorbic Acid, Ferulic Acid, Vitamin E, Hyaluronic Acid',
        skinType: 'All skin types except very sensitive'
    },
    {
        id: 'toner',
        name: 'Hydrating Essence Toner',
        brand: 'Aqua Beauty',
        category: 'Toner',
        price: 28.00,
        image: '../img/product_toner.jpg',
        shortDesc: 'Preps skin for better absorption.',
        fullDesc: 'A hydrating essence toner that preps your skin for better absorption of subsequent products. Contains multiple weights of hyaluronic acid for multi-layer hydration.',
        benefits: ['Deep hydration', 'Preps skin', 'pH balancing', 'Alcohol-free'],
        ingredients: 'Hyaluronic Acid, Panthenol, Allantoin, Centella Asiatica',
        skinType: 'All skin types'
    },
    {
        id: 'eyecream',
        name: 'Anti-Aging Eye Cream',
        brand: 'Aurora',
        category: 'Eye Care',
        price: 42.00,
        image: '../img/product_eyecream.jpg',
        shortDesc: 'Reduces fine lines and puffiness.',
        fullDesc: 'A nourishing eye cream that targets fine lines, dark circles, and puffiness. Formulated with peptides and caffeine to rejuvenate the delicate eye area.',
        benefits: ['Reduces fine lines', 'Minimizes puffiness', 'Brightens dark circles', 'Gentle formula'],
        ingredients: 'Peptides, Caffeine, Retinol, Hyaluronic Acid, Niacinamide',
        skinType: 'All skin types'
    },
    {
        id: 'scrub',
        name: 'Gentle Face Scrub',
        brand: 'Pure Skin',
        category: 'Exfoliator',
        price: 22.00,
        image: '../img/product_scrub.jpg',
        shortDesc: 'Exfoliates without irritation.',
        fullDesc: 'A gentle physical exfoliator with ultra-fine jojoba beads that remove dead skin cells without causing micro-tears. Leaves skin smooth and radiant.',
        benefits: ['Gentle exfoliation', 'Unclogs pores', 'Smooths texture', 'Suitable for weekly use'],
        ingredients: 'Jojoba Beads, Glycerin, Aloe Vera, Chamomile Extract',
        skinType: 'All skin types except active acne'
    },
    {
        id: 'mask',
        name: 'Clay Detox Mask',
        brand: 'Pure Skin',
        category: 'Mask',
        price: 30.00,
        image: '../img/product_mask.jpg',
        shortDesc: 'Purifies and balances skin.',
        fullDesc: 'A purifying clay mask that draws out impurities, absorbs excess oil, and minimizes the appearance of pores. Contains kaolin and bentonite clay for deep cleansing.',
        benefits: ['Deep cleanses', 'Absorbs excess oil', 'Minimizes pores', 'Detoxifies skin'],
        ingredients: 'Kaolin Clay, Bentonite Clay, Tea Tree Oil, Witch Hazel',
        skinType: 'Oily, combination, acne-prone'
    },
    {
        id: 'retinol',
        name: 'Retinol Night Cream',
        brand: 'Ageless',
        category: 'Treatment',
        price: 52.00,
        image: '../img/product_retinol.jpg',
        shortDesc: 'Anti-aging night treatment.',
        fullDesc: 'A powerful 0.5% retinol cream that reduces fine lines, wrinkles, and uneven skin tone. Encapsulated retinol ensures slow release for minimal irritation.',
        benefits: ['Reduces wrinkles', 'Improves texture', 'Evens skin tone', 'Boosts cell turnover'],
        ingredients: '0.5% Encapsulated Retinol, Squalane, Niacinamide, Ceramides',
        skinType: 'Normal, oily, combination'
    },
    {
        id: 'lipbalm',
        name: 'Nourishing Lip Balm',
        brand: 'Lip Care',
        category: 'Lip Care',
        price: 12.00,
        image: '../img/product_lipbalm.jpg',
        shortDesc: 'Hydrates and protects lips.',
        fullDesc: 'A deeply nourishing lip balm that hydrates, repairs, and protects dry, chapped lips. Contains shea butter, beeswax, and vitamin E for long-lasting moisture.',
        benefits: ['Deep hydration', 'Repairs chapped lips', 'SPF 15 protection', 'Long-lasting'],
        ingredients: 'Shea Butter, Beeswax, Vitamin E, Coconut Oil, SPF 15',
        skinType: 'All skin types'
    }
];

// ========================================
// Shop Page - Search & Filter
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('shopSearch');
    const productGrid = document.getElementById('shopProductsGrid');
    
    if (searchInput && productGrid) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            filterProducts(query);
        });
    }
    
    // Filter checkboxes
    const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            filterProducts();
        });
    });
});

function filterProducts(searchQuery = '') {
    const productGrid = document.getElementById('shopProductsGrid');
    if (!productGrid) return;
    
    // Get selected categories
    const selectedCategories = Array.from(document.querySelectorAll('.filter-category:checked')).map(cb => cb.value);
    const selectedBrands = Array.from(document.querySelectorAll('.filter-brand:checked')).map(cb => cb.value);
    
    // Get search query
    const searchInput = document.getElementById('shopSearch');
    if (searchInput && !searchQuery) {
        searchQuery = searchInput.value.toLowerCase();
    }
    
    // Filter products
    let filtered = products.filter(product => {
        const matchesSearch = !searchQuery || 
            product.name.toLowerCase().includes(searchQuery) ||
            product.brand.toLowerCase().includes(searchQuery) ||
            product.category.toLowerCase().includes(searchQuery);
        
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        
        return matchesSearch && matchesCategory && matchesBrand;
    });
    
    // Render products
    renderShopProducts(filtered);
}

function renderShopProducts(productsToRender) {
    const productGrid = document.getElementById('shopProductsGrid');
    if (!productGrid) return;
    
    if (productsToRender.length === 0) {
        productGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <p style="color: var(--fa-text-secondary);">No products found matching your criteria.</p>
            </div>
        `;
        return;
    }
    
    productGrid.innerHTML = productsToRender.map(product => `
        <div class="shop-product-card" onclick="openProductModal('${product.id}')">
            <img src="${product.image}" alt="${product.name}">
            <div class="shop-product-info">
                <p class="shop-product-brand">${product.brand}</p>
                <h4>${product.name}</h4>
                <p class="shop-product-price">PHP ${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
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
        <button class="close-modal" onclick="closeProductModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
        </button>
        <div class="modal-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="modal-content">
            <p class="modal-brand">${product.brand}</p>
            <h2>${product.name}</h2>
            <p class="modal-price">PHP ${product.price.toFixed(2)}</p>
            <p class="modal-description">${product.fullDesc}</p>
            <div class="modal-details">
                <h4>Key Benefits</h4>
                <ul>
                    ${product.benefits.map(b => `<li>${b}</li>`).join('')}
                </ul>
                <h4>Key Ingredients</h4>
                <p style="font-size: 14px; color: var(--fa-text-secondary);">${product.ingredients}</p>
                <h4 style="margin-top: 1rem;">Best For</h4>
                <p style="font-size: 14px; color: var(--fa-text-secondary);">${product.skinType}</p>
            </div>
            <button class="btn-primary add-to-cart">
                Add to Cart
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 6h15l-1.5 9h-12z"/>
                    <circle cx="9" cy="20" r="1"/>
                    <circle cx="18" cy="20" r="1"/>
                    <path d="M6 6L5 3H2"/>
                </svg>
            </button>
        </div>
    `;
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const overlay = document.getElementById('productModalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('productModalOverlay');
    const sidePanelOverlay = document.getElementById('sidePanelOverlay');
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProductModal();
            }
        });
    }
    
    if (sidePanelOverlay) {
        sidePanelOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeSidePanel();
            }
        });
    }
});

// Close on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProductModal();
        closeSidePanel();
    }
});

// ========================================
// Dynamic Filter Counts
// ========================================
function updateFilterCounts() {
    // Get all category checkboxes
    const categoryCheckboxes = document.querySelectorAll('.filter-category');
    const brandCheckboxes = document.querySelectorAll('.filter-brand');
    
    // Calculate counts for categories
    categoryCheckboxes.forEach(checkbox => {
        const category = checkbox.value;
        const count = products.filter(p => p.category === category).length;
        
        // Find the count span next to this checkbox
        const filterOption = checkbox.closest('.filter-option');
        const countSpan = filterOption.querySelector('.filter-count');
        if (countSpan) {
            countSpan.textContent = `(${count})`;
        }
    });
    
    // Calculate counts for brands
    brandCheckboxes.forEach(checkbox => {
        const brand = checkbox.value;
        const count = products.filter(p => p.brand === brand).length;
        
        const filterOption = checkbox.closest('.filter-option');
        const countSpan = filterOption.querySelector('.filter-count');
        if (countSpan) {
            countSpan.textContent = `(${count})`;
        }
    });
}


// ========================================
// Initialize Shop Page
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const shopGrid = document.getElementById('shopProductsGrid');
    if (shopGrid) {
        renderShopProducts(products);
        updateFilterCounts();
    }
});
