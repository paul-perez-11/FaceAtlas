let ingredients = [];
let facts = [];

// ========================================
// Initialize Ingredients Page
// ========================================
document.addEventListener('DOMContentLoaded', async function() {
    const ingredientsGrid = document.getElementById('ingredientsGrid');
    
    if (ingredientsGrid) {
        try {
            // Dynamic path based on whether we are in /pages/ or root
            const basePath = window.location.pathname.includes('/pages/') ? '../' : './';
            const response = await fetch(basePath + 'data/ingredients.json');
            
            if (!response.ok) throw new Error('Failed to load ingredients.json');
            const data = await response.json();
            
            ingredients = data.ingredients;
            facts = data.facts;
            
            renderIngredients(ingredients);
            setupCategoryFilters();
            setupSearch();
            rotateFacts();
        } catch (error) {
            console.error('Error loading ingredients:', error);
            ingredientsGrid.innerHTML = `
                <div class="col-12 text-center p-5">
                    <p class="text-secondary">Error loading ingredients. Please refresh the page.</p>
                </div>
            `;
        }
    }
});

function renderIngredients(ingredientsToRender) {
    const grid = document.getElementById('ingredientsGrid');
    if(!grid) return;
    
    if (ingredientsToRender.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center p-5">
                <p class="text-secondary">No ingredients found matching your search.</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = ingredientsToRender.map(ing => `
        <div class="col-12 col-md-6 col-xl-4">
            <article class="card h-100 border-0 shadow-sm rounded-4 ingredient-card" onclick="openIngredientModal('${ing.id}')" style="cursor:pointer; transition:transform 0.3s, box-shadow 0.3s; --ing-color: ${ing.color}; border: 2px solid transparent;">
                <div class="card-body p-3 p-md-4 d-flex align-items-start gap-3">
                    <div class="rounded-4 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 48px; height: 48px; background: ${ing.color}20; color: ${ing.color}; font-family: 'Space Mono', monospace; font-weight: 700; font-size: 20px;">
                        <span>${ing.icon}</span>
                    </div>
                    <div class="flex-grow-1">
                        <span class="font-mono small text-uppercase mb-1 d-block" style="color: var(--fa-accent); font-size: 10px;">${formatCategory(ing.category)}</span>
                        <h3 class="fs-6 fs-md-5 mb-1">${ing.name}</h3>
                        <p class="text-secondary small mb-1 lh-sm">${ing.shortDesc}</p>
                        <div class="text-secondary opacity-75" style="font-size: 10px;">
                            Also known as: ${ing.aka.split(',')[0]}
                        </div>
                    </div>
                    <div class="align-self-center text-secondary opacity-50 ingredient-arrow ms-n2">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </div>
                </div>
            </article>
        </div>
    `).join('');
}

function formatCategory(category) {
    return category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function setupCategoryFilters() {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => {
                b.classList.remove('active', 'bg-light', 'fw-medium');
                b.classList.add('bg-transparent', 'text-secondary');
            });
            this.classList.remove('bg-transparent', 'text-secondary');
            this.classList.add('active', 'bg-light', 'fw-medium');
            
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
    if(!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const activeBtn = document.querySelector('.category-btn.active');
        const activeCategory = activeBtn ? activeBtn.dataset.category : 'all';
        
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
    if (!factElement || facts.length === 0) return;
    
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
        <button class="btn btn-light position-absolute rounded-circle p-0 d-flex align-items-center justify-content-center shadow" onclick="closeIngredientModal()" style="top: 24px; right: 24px; width: 44px; height: 44px; z-index: 10;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        
        <div class="p-4 p-md-5 rounded-top-4" style="background: ${ing.color}10;">
            <div class="d-flex align-items-center gap-4 pe-5">
                <div class="rounded-4 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 80px; height: 80px; background: ${ing.color}; color: white; font-family: 'Space Mono', monospace; font-size: 24px; font-weight: 700;">
                    <span>${ing.icon}</span>
                </div>
                <div>
                    <span class="font-mono small text-uppercase mb-1 d-block opacity-75" style="font-size: 11px;">${formatCategory(ing.category)}</span>
                    <h2 class="fs-3 fw-bold mb-1">${ing.name}</h2>
                    <p class="small opacity-75 mb-0">Also known as: ${ing.aka}</p>
                </div>
            </div>
        </div>
        
        <div class="p-4 p-md-5">
            <p class="text-secondary mb-4 lh-lg">${ing.description}</p>
            
            <div class="mb-4">
                <h4 class="font-mono small text-uppercase mb-3">Key Benefits</h4>
                <div class="row g-2">
                    ${ing.benefits.map(b => `<div class="col-sm-6 d-flex align-items-start gap-2"><span style="color: ${ing.color}">•</span><span class="small">${b}</span></div>`).join('')}
                </div>
            </div>
            
            <div class="row g-3 mb-4">
                <div class="col-sm-6">
                    <div class="bg-light p-3 rounded-4 h-100">
                        <h5 class="font-mono small text-uppercase text-secondary mb-2" style="font-size:10px;">Best For</h5>
                        <div class="d-flex flex-wrap gap-2">
                            ${ing.bestFor.map(type => `<span class="badge bg-white text-dark border fw-normal py-1 px-2">${type}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="bg-light p-3 rounded-4 h-100">
                        <h5 class="font-mono small text-uppercase text-secondary mb-2" style="font-size:10px;">Works Well With</h5>
                        <div class="d-flex flex-wrap gap-2">
                            ${ing.worksWellWith.map(item => `<span class="badge fw-normal py-1 px-2" style="background:#e8f5e9; color:#2e7d32;">${item}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="p-3 rounded-4 h-100" style="background: #fff5f5;">
                        <h5 class="font-mono small text-uppercase text-secondary mb-2" style="font-size:10px;">Avoid Mixing With</h5>
                        <div class="d-flex flex-wrap gap-2">
                            ${ing.avoidMixing.map(item => `<span class="badge fw-normal py-1 px-2" style="background:#ffebee; color:#c62828;">${item}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="bg-light p-3 rounded-4 h-100">
                        <h5 class="font-mono small text-uppercase text-secondary mb-2" style="font-size:10px;">Usage Guidelines</h5>
                        <p class="small mb-1"><strong>Concentration:</strong> ${ing.concentration}</p>
                        <p class="small mb-1"><strong>pH Range:</strong> ${ing.phRange}</p>
                        <p class="small mb-0"><strong>When:</strong> ${ing.usage}</p>
                    </div>
                </div>
            </div>
            
            <div class="mb-4">
                <h4 class="font-mono small text-uppercase mb-3">Found In</h4>
                <div class="d-flex flex-wrap gap-2">
                    ${ing.products.map(type => `<span class="badge bg-light text-dark fw-normal py-2 px-3 border">${type.charAt(0).toUpperCase() + type.slice(1)}s</span>`).join('')}
                </div>
            </div>
            
            <a href="shop.html" class="btn btn-primary w-100 rounded-pill py-3 d-flex align-items-center justify-content-center gap-2">
                Find Products With ${ing.name}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
        </div>
    `;
    
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeIngredientModal() {
    const overlay = document.getElementById('ingredientModalOverlay');
    if(overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('ingredientModalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === this) closeIngredientModal();
        });
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeIngredientModal();
});