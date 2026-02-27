// ========================================
// Ingredients Data
// ========================================
const ingredients = [
    {
        id: 'niacinamide',
        name: 'Niacinamide',
        category: 'brightening',
        aka: 'Vitamin B3, Nicotinamide',
        molecularWeight: '122.12 g/mol',
        solubility: 'Water-soluble',
        phRange: '5.0 - 7.0',
        color: '#4AA3C1',
        icon: 'B3',
        shortDesc: 'Multi-functional powerhouse that strengthens skin barrier and minimizes pores.',
        description: 'Niacinamide is a form of Vitamin B3 that offers multiple skin benefits. It helps build keratin, a type of protein that keeps your skin firm and healthy. It also helps your skin grow a ceramide (lipid) barrier, which helps retain moisture.',
        benefits: [
            'Minimizes enlarged pores',
            'Improves skin barrier function',
            'Reduces inflammation and redness',
            'Regulates oil production',
            'Treats hyperpigmentation',
            'Minimizes fine lines and wrinkles'
        ],
        bestFor: ['Oily skin', 'Acne-prone skin', 'Aging skin', 'Sensitive skin'],
        worksWellWith: ['Hyaluronic Acid', 'Retinol', 'Peptides', 'Zinc'],
        avoidMixing: ['Vitamin C (at same time)', 'AHAs/BHAs (high concentrations)'],
        concentration: '2% - 10%',
        usage: 'Can be used AM and PM. Start with lower concentrations if sensitive.',
        products: ['serum', 'moisturizer', 'toner']
    },
    {
        id: 'retinol',
        name: 'Retinol',
        category: 'retinoids',
        aka: 'Vitamin A, Retinoid',
        molecularWeight: '286.45 g/mol',
        solubility: 'Fat-soluble',
        phRange: '5.5 - 6.0',
        color: '#FF4D6D',
        icon: 'A',
        shortDesc: 'Gold standard for anti-aging and acne treatment.',
        description: 'Retinol is a derivative of Vitamin A and part of the retinoid family. It works by increasing cell turnover and stimulating collagen production. It\'s considered the gold standard ingredient for anti-aging and acne treatment.',
        benefits: [
            'Accelerates cell turnover',
            'Stimulates collagen production',
            'Reduces fine lines and wrinkles',
            'Treats acne and prevents breakouts',
            'Fades dark spots and hyperpigmentation',
            'Improves skin texture'
        ],
        bestFor: ['Aging skin', 'Acne-prone skin', 'Textured skin', 'Sun-damaged skin'],
        worksWellWith: ['Niacinamide', 'Hyaluronic Acid', 'Ceramides', 'Peptides'],
        avoidMixing: ['AHAs/BHAs', 'Vitamin C', 'Benzoyl Peroxide'],
        concentration: '0.25% - 1%',
        usage: 'PM only. Start 2-3 times weekly, gradually increase. Always use SPF.',
        products: ['retinol', 'serum']
    },
    {
        id: 'hyaluronic-acid',
        name: 'Hyaluronic Acid',
        category: 'hydrators',
        aka: 'HA, Sodium Hyaluronate',
        molecularWeight: '403.3 g/mol (varies)',
        solubility: 'Water-soluble',
        phRange: '6.0 - 8.0',
        color: '#6B8DD6',
        icon: 'HA',
        shortDesc: 'Holds 1000x its weight in water for intense hydration.',
        description: 'Hyaluronic Acid is a humectant that draws moisture from the environment into the skin. It can hold up to 1,000 times its weight in water, making it incredibly effective for hydration. It occurs naturally in our bodies but decreases with age.',
        benefits: [
            'Deeply hydrates skin',
            'Plumps fine lines and wrinkles',
            'Improves skin elasticity',
            'Speeds wound healing',
            'Soothes irritated skin',
            'Works on all skin types'
        ],
        bestFor: ['Dry skin', 'Dehydrated skin', 'Aging skin', 'All skin types'],
        worksWellWith: ['Everything', 'Niacinamide', 'Retinol', 'Vitamin C', 'Peptides'],
        avoidMixing: ['None - very gentle'],
        concentration: '0.1% - 2%',
        usage: 'AM and PM. Apply to damp skin for best results.',
        products: ['serum', 'moisturizer', 'toner']
    },
    {
        id: 'salicylic-acid',
        name: 'Salicylic Acid',
        category: 'exfoliants',
        aka: 'BHA, Beta Hydroxy Acid',
        molecularWeight: '138.12 g/mol',
        solubility: 'Oil-soluble',
        phRange: '3.0 - 4.0',
        color: '#2ECC71',
        icon: 'BHA',
        shortDesc: 'Oil-soluble exfoliant that unclogs pores and fights acne.',
        description: 'Salicylic Acid is a beta hydroxy acid (BHA) that is oil-soluble, allowing it to penetrate deep into pores and dissolve sebum and dead skin cells. It\'s particularly effective for acne-prone and oily skin types.',
        benefits: [
            'Unclogs and clears pores',
            'Reduces acne and blackheads',
            'Exfoliates inside the pore lining',
            'Anti-inflammatory properties',
            'Regulates sebum production',
            'Smooths skin texture'
        ],
        bestFor: ['Oily skin', 'Acne-prone skin', 'Congested skin', 'Blackhead-prone skin'],
        worksWellWith: ['Niacinamide', 'Hyaluronic Acid', 'Ceramides'],
        avoidMixing: ['Retinol', 'Vitamin C', 'Other AHAs (same routine)'],
        concentration: '0.5% - 2%',
        usage: 'Start 2-3 times weekly. Can use AM or PM, but PM preferred.',
        products: ['cleanser', 'toner', 'serum']
    },
    {
        id: 'vitamin-c',
        name: 'Vitamin C',
        category: 'antioxidants',
        aka: 'L-Ascorbic Acid, Ascorbic Acid',
        molecularWeight: '176.12 g/mol',
        solubility: 'Water-soluble',
        phRange: '2.5 - 3.5',
        color: '#F39C12',
        icon: 'C',
        shortDesc: 'Potent antioxidant that brightens and protects against free radicals.',
        description: 'Vitamin C (L-Ascorbic Acid) is a powerful antioxidant that neutralizes free radicals, brightens skin, and boosts collagen production. It\'s one of the most researched skincare ingredients with proven efficacy.',
        benefits: [
            'Brightens and evens skin tone',
            'Neutralizes free radicals',
            'Boosts collagen synthesis',
            'Reduces hyperpigmentation',
            'Enhances sunscreen efficacy',
            'Improves skin texture'
        ],
        bestFor: ['Dull skin', 'Hyperpigmentation', 'Aging skin', 'Sun-damaged skin'],
        worksWellWith: ['Vitamin E', 'Ferulic Acid', 'Hyaluronic Acid', 'Sunscreen'],
        avoidMixing: ['Retinol', 'Niacinamide (high %)', 'Benzoyl Peroxide'],
        concentration: '10% - 20%',
        usage: 'AM preferred for antioxidant protection. Store in dark, cool place.',
        products: ['serum']
    },
    {
        id: 'glycolic-acid',
        name: 'Glycolic Acid',
        category: 'exfoliants',
        aka: 'AHA, Alpha Hydroxy Acid',
        molecularWeight: '76.05 g/mol',
        solubility: 'Water-soluble',
        phRange: '3.0 - 4.0',
        color: '#E67E22',
        icon: 'AHA',
        shortDesc: 'Smallest AHA molecule for effective surface exfoliation.',
        description: 'Glycolic Acid is an alpha hydroxy acid (AHA) derived from sugar cane. It has the smallest molecular size of all AHAs, allowing it to penetrate skin effectively and exfoliate the surface layer.',
        benefits: [
            'Exfoliates dead skin cells',
            'Improves skin texture',
            'Reduces fine lines',
            'Fades dark spots',
            'Enhances product absorption',
            'Stimulates collagen'
        ],
        bestFor: ['Dull skin', 'Aging skin', 'Textured skin', 'Sun-damaged skin'],
        worksWellWith: ['Hyaluronic Acid', 'Ceramides', 'Niacinamide'],
        avoidMixing: ['Retinol', 'Vitamin C', 'Salicylic Acid (same routine)'],
        concentration: '5% - 10%',
        usage: 'PM only, 2-3 times weekly. Always use SPF during the day.',
        products: ['toner', 'serum', 'mask']
    },
    {
        id: 'ceramides',
        name: 'Ceramides',
        category: 'hydrators',
        aka: 'Ceramide NP, AP, EOP',
        molecularWeight: 'Varies',
        solubility: 'Lipid-soluble',
        phRange: '5.0 - 7.0',
        color: '#9B59B6',
        icon: 'Cer',
        shortDesc: 'Essential lipids that restore and maintain skin barrier.',
        description: 'Ceramides are lipids (fats) that make up over 50% of skin\'s composition. They form a protective layer that limits moisture loss and protects against environmental damage. Natural levels decrease with age.',
        benefits: [
            'Restores skin barrier',
            'Locks in moisture',
            'Protects against irritants',
            'Reduces signs of aging',
            'Soothes sensitive skin',
            'Improves skin elasticity'
        ],
        bestFor: ['Dry skin', 'Sensitive skin', 'Compromised barrier', 'Aging skin'],
        worksWellWith: ['Cholesterol', 'Fatty Acids', 'Niacinamide', 'Hyaluronic Acid'],
        avoidMixing: ['None - very compatible'],
        concentration: '1% - 5%',
        usage: 'AM and PM. Essential for barrier repair routines.',
        products: ['moisturizer', 'serum']
    },
    {
        id: 'azelaic-acid',
        name: 'Azelaic Acid',
        category: 'acne-fighting',
        aka: 'Azelaic',
        molecularWeight: '188.22 g/mol',
        solubility: 'Water/Fat soluble',
        phRange: '4.0 - 5.0',
        color: '#1ABC9C',
        icon: 'AzA',
        shortDesc: 'Gentle multi-tasker for acne, rosacea, and pigmentation.',
        description: 'Azelaic Acid is a dicarboxylic acid found naturally in wheat, rye, and barley. It offers anti-inflammatory, antibacterial, and skin-lightening properties, making it ideal for acne and rosacea-prone skin.',
        benefits: [
            'Reduces inflammation',
            'Treats acne and rosacea',
            'Fades post-acne marks',
            'Inhibits melanin production',
            'Unclogs pores',
            'Gentler than other acids'
        ],
        bestFor: ['Rosacea-prone skin', 'Acne-prone skin', 'Sensitive skin', 'Melasma'],
        worksWellWith: ['Niacinamide', 'Hyaluronic Acid', 'Ceramides'],
        avoidMixing: ['Retinol (initially)', 'AHAs/BHAs (high concentrations)'],
        concentration: '10% - 20%',
        usage: 'AM and PM. Start once daily, can increase to twice.',
        products: ['serum', 'cream']
    },
    {
        id: 'peptides',
        name: 'Peptides',
        category: 'antioxidants',
        aka: 'Polypeptides, Copper Peptides',
        molecularWeight: 'Varies',
        solubility: 'Water-soluble',
        phRange: '4.0 - 7.0',
        color: '#E91E63',
        icon: 'Pep',
        shortDesc: 'Amino acid chains that signal skin to produce collagen.',
        description: 'Peptides are short chains of amino acids that act as building blocks of proteins like collagen and elastin. They send signals to your skin to produce more collagen, helping to firm and plump the skin.',
        benefits: [
            'Stimulates collagen production',
            'Reduces fine lines',
            'Improves skin firmness',
            'Strengthens skin barrier',
            'Anti-inflammatory properties',
            'Repairs damaged skin'
        ],
        bestFor: ['Aging skin', 'Mature skin', 'Damaged skin', 'All skin types'],
        worksWellWith: ['Retinol', 'Niacinamide', 'Hyaluronic Acid', 'Vitamin C'],
        avoidMixing: ['Direct acids (high concentrations)'],
        concentration: 'Varies by type',
        usage: 'AM and PM. Best in leave-on products like serums.',
        products: ['serum', 'moisturizer', 'eyecream']
    },
    {
        id: 'centella',
        name: 'Centella Asiatica',
        category: 'soothing',
        aka: 'Cica, Gotu Kola, Tiger Grass',
        molecularWeight: 'Complex',
        solubility: 'Water-soluble',
        phRange: '5.0 - 7.0',
        color: '#27AE60',
        icon: 'Cica',
        shortDesc: 'Ancient healing herb that calms irritated and sensitive skin.',
        description: 'Centella Asiatica is a medicinal herb used in traditional medicine for centuries. It contains active compounds like madecassoside and asiaticoside that promote wound healing and soothe inflammation.',
        benefits: [
            'Calms inflammation',
            'Accelerates wound healing',
            'Strengthens skin barrier',
            'Boosts circulation',
            'Antioxidant properties',
            'Reduces redness'
        ],
        bestFor: ['Sensitive skin', 'Irritated skin', 'Acne-prone skin', 'Compromised barrier'],
        worksWellWith: ['Niacinamide', 'Ceramides', 'Hyaluronic Acid', 'All ingredients'],
        avoidMixing: ['None - very gentle'],
        concentration: 'Varies (extract or isolated compounds)',
        usage: 'AM and PM. Especially beneficial after procedures or irritation.',
        products: ['serum', 'moisturizer', 'toner', 'mask']
    },
    {
        id: 'bakuchiol',
        name: 'Bakuchiol',
        category: 'retinoids',
        aka: 'Plant-based Retinol',
        molecularWeight: '256.34 g/mol',
        solubility: 'Oil-soluble',
        phRange: '5.0 - 7.0',
        color: '#8E44AD',
        icon: 'Bak',
        shortDesc: 'Gentle, plant-based alternative to retinol.',
        description: 'Bakuchiol is a plant-derived compound from the babchi plant that mimics retinol\'s effects without the irritation. It activates similar pathways in skin to stimulate collagen and cell turnover.',
        benefits: [
            'Reduces fine lines and wrinkles',
            'Improves skin elasticity',
            'Evens skin tone',
            'Antioxidant protection',
            'Gentle on sensitive skin',
            'Safe for pregnancy'
        ],
        bestFor: ['Sensitive skin', 'Retinol-intolerant skin', 'Pregnant women', 'Beginners'],
        worksWellWith: ['Niacinamide', 'Hyaluronic Acid', 'Vitamin C', 'Peptides'],
        avoidMixing: ['None known'],
        concentration: '0.5% - 2%',
        usage: 'AM and PM. Can be used with other actives unlike retinol.',
        products: ['serum', 'oil', 'moisturizer']
    },
    {
        id: 'zinc-oxide',
        name: 'Zinc Oxide',
        category: 'soothing',
        aka: 'Physical sunscreen, Mineral filter',
        molecularWeight: '81.38 g/mol',
        solubility: 'Insoluble',
        phRange: 'N/A',
        color: '#95A5A6',
        icon: 'ZnO',
        shortDesc: 'Mineral sun protection with soothing properties.',
        description: 'Zinc Oxide is a mineral compound that provides broad-spectrum UV protection by sitting on top of skin and reflecting rays. It also has anti-inflammatory properties that help calm irritated skin.',
        benefits: [
            'Broad-spectrum UV protection',
            'Suitable for sensitive skin',
            'Anti-inflammatory',
            'Non-irritating',
            'Reef-safe',
            'Soothes diaper rash/acne'
        ],
        bestFor: ['Sensitive skin', 'Acne-prone skin', 'Rosacea', 'All skin types'],
        worksWellWith: ['Titanium Dioxide', 'Niacinamide', 'All ingredients'],
        avoidMixing: ['None'],
        concentration: '10% - 25% (sunscreen)',
        usage: 'AM as last step. Reapply every 2 hours when in sun.',
        products: ['sunscreen']
    }
];

// ========================================
// Random Facts
// ========================================
const facts = [
    'Vitamin C is most effective when stored in dark, airtight containers as it oxidizes quickly when exposed to light and air.',
    'Retinol can take 3-6 months of consistent use to show visible results in fine lines and wrinkles.',
    'Hyaluronic Acid works best when applied to damp skin, as it pulls moisture from its surroundings.',
    'Niacinamide can help reduce the irritation often caused by retinol when used together.',
    'Ceramides make up 50% of your skin barrier and are essential for keeping moisture in and irritants out.',
    'Salicylic Acid is oil-soluble, making it the only exfoliant that can penetrate deep into pores.',
    'Peptides are too large to penetrate skin deeply, so they work on the surface to signal skin processes.',
    'Bakuchiol has been shown in studies to provide similar results to retinol without the irritation.',
    'Zinc Oxide is the only sunscreen ingredient approved by FDA for babies under 6 months.',
    'Azelaic Acid is naturally produced by the yeast that lives on healthy skin.'
];

// ========================================
// Initialize Ingredients Page
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const ingredientsGrid = document.getElementById('ingredientsGrid');
    
    if (ingredientsGrid) {
        renderIngredients(ingredients);
        setupCategoryFilters();
        setupSearch();
        rotateFacts();
    }
});

function renderIngredients(ingredientsToRender) {
    const grid = document.getElementById('ingredientsGrid');
    
    if (ingredientsToRender.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                <p style="color: var(--fa-text-secondary);">No ingredients found matching your search.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = ingredientsToRender.map(ing => `
        <div class="ingredient-card" onclick="openIngredientModal('${ing.id}')" style="--ing-color: ${ing.color}">
            <div class="ingredient-icon" style="background: ${ing.color}20; color: ${ing.color}">
                <span>${ing.icon}</span>
            </div>
            <div class="ingredient-info">
                <span class="ingredient-category">${formatCategory(ing.category)}</span>
                <h3>${ing.name}</h3>
                <p>${ing.shortDesc}</p>
                <div class="ingredient-meta">
                    <span class="ingredient-aka">Also known as: ${ing.aka.split(',')[0]}</span>
                </div>
            </div>
            <div class="ingredient-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </div>
        </div>
    `).join('');
}

function formatCategory(category) {
    return category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

function setupCategoryFilters() {
    const buttons = document.querySelectorAll('.category-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            filterIngredients(category);
        });
    });
}

function filterIngredients(category) {
    if (category === 'all') {
        renderIngredients(ingredients);
    } else {
        const filtered = ingredients.filter(ing => ing.category === category);
        renderIngredients(filtered);
    }
}

function setupSearch() {
    const searchInput = document.getElementById('ingredientSearch');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const activeCategory = document.querySelector('.category-btn.active').dataset.category;
        
        let filtered = ingredients;
        
        if (activeCategory !== 'all') {
            filtered = filtered.filter(ing => ing.category === activeCategory);
        }
        
        filtered = filtered.filter(ing => 
            ing.name.toLowerCase().includes(query) ||
            ing.aka.toLowerCase().includes(query) ||
            ing.benefits.some(b => b.toLowerCase().includes(query))
        );
        
        renderIngredients(filtered);
    });
}

function rotateFacts() {
    const factElement = document.getElementById('ingredientFact');
    let currentFact = 0;
    
    setInterval(() => {
        factElement.style.opacity = '0';
        setTimeout(() => {
            currentFact = (currentFact + 1) % facts.length;
            factElement.textContent = facts[currentFact];
            factElement.style.opacity = '1';
        }, 300);
    }, 8000);
}

// ========================================
// Ingredient Modal
// ========================================
function openIngredientModal(ingredientId) {
    const ing = ingredients.find(i => i.id === ingredientId);
    if (!ing) return;
    
    const overlay = document.getElementById('ingredientModalOverlay');
    const modalContent = document.getElementById('ingredientModalContent');
    
    modalContent.innerHTML = `
        <button class="close-modal" onclick="closeIngredientModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
        </button>
        
        <div class="ingredient-modal-header" style="background: ${ing.color}10;">
            <div class="ingredient-modal-icon" style="background: ${ing.color}; color: white;">
                <span>${ing.icon}</span>
            </div>
            <div class="ingredient-modal-title">
                <span class="modal-category">${formatCategory(ing.category)}</span>
                <h2>${ing.name}</h2>
                <p class="modal-aka">Also known as: ${ing.aka}</p>
            </div>
        </div>
        
        <div class="ingredient-modal-body">
            <p class="modal-description">${ing.description}</p>
            
            <div class="modal-section">
                <h4>Key Benefits</h4>
                <ul class="benefits-list">
                    ${ing.benefits.map(b => `<li><span style="color: ${ing.color}">•</span> ${b}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-grid">
                <div class="modal-info-box">
                    <h5>Best For</h5>
                    <div class="tag-list">
                        ${ing.bestFor.map(type => `<span class="info-tag">${type}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-info-box">
                    <h5>Works Well With</h5>
                    <div class="tag-list">
                        ${ing.worksWellWith.map(item => `<span class="info-tag compatible">${item}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-info-box warning">
                    <h5>Avoid Mixing With</h5>
                    <div class="tag-list">
                        ${ing.avoidMixing.map(item => `<span class="info-tag avoid">${item}</span>`).join('')}
                    </div>
                </div>
                
                <div class="modal-info-box">
                    <h5>Usage Guidelines</h5>
                    <p><strong>Concentration:</strong> ${ing.concentration}</p>
                    <p><strong>pH Range:</strong> ${ing.phRange}</p>
                    <p><strong>When to use:</strong> ${ing.usage}</p>
                </div>
            </div>
            
            <div class="modal-section">
                <h4>Found In</h4>
                <div class="product-type-list">
                    ${ing.products.map(type => `
                        <span class="product-type-tag">
                            ${type.charAt(0).toUpperCase() + type.slice(1)}s
                        </span>
                    `).join('')}
                </div>
            </div>
            
            <a href="shop.html" class="btn-primary" style="margin-top: 1.5rem; width: 100%; justify-content: center;">
                Find Products With ${ing.name}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
            </a>
        </div>
    `;
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeIngredientModal() {
    const overlay = document.getElementById('ingredientModalOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('ingredientModalOverlay');
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeIngredientModal();
            }
        });
    }
});

// Close on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeIngredientModal();
    }
});