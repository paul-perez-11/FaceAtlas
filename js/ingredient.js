let ingredients = [];
let facts = [];

// ========================================
// Initialize Ingredients Page
// ========================================
document.addEventListener('DOMContentLoaded', async function() {
    const ingredientsGrid = document.getElementById('ingredientsGrid');
    
    if (ingredientsGrid) {
        try {
            const response = await fetch('../data/ingredients.json');
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
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                    <p style="color: var(--fa-text-secondary);">Error loading ingredients. Please refresh the page.</p>
                </div>
            `;
        }
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