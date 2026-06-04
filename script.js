// ==========================
// 1. STATE CONFIGURATION 
// ===================
let heartRateState = 72; // Baseline healthy resting heart rate state (BPM)

// ==========================
// 2. DOM SENSORY HOOKS 
// =================
const themeToggleBtn = document.querySelector('.js-theme-toggle');
const incrementBtn = document.querySelector('.js-increment');
const decrementBtn = document.querySelector('.js-decrement');
const vitalsValueDisplay = document.querySelector('.js-counter-value');

// ====================================
// 3. LOGIC ACTUATORS & MUTATIONS 
// ======================


function handleThemeToggle() {
    // Process: Toggle the structural visual state class
    document.body.classList.toggle('is-dark-mode');
    
    // Process: Persist choices inside local storage cache engine
    const isNightShiftActive = document.body.classList.contains('is-dark-mode');
    localStorage.setItem('medcoreTheme', isNightShiftActive ? 'dark' : 'light');
}

function updateVitalsState(actionType) {
    // Process: Evaluate condition adjustments and apply boundary caps
    if (actionType === 'INCREMENT') {
        if (heartRateState < 200) { // Safety cap on heart rate simulation
            heartRateState += 4;
        }
    } else if (actionType === 'DECREMENT') {
        if (heartRateState > 40) { // Lower threshold safety cap
            heartRateState -= 4;
        }
    }

    // Output: Mutate the living DOM securely via clean textContent strings to prevent XSS
    vitalsValueDisplay.textContent = heartRateState;
}

// =========================
// 4. WIRING THE NERVES 
// =================
themeToggleBtn.addEventListener('click', handleThemeToggle);

incrementBtn.addEventListener('click', () => {
    updateVitalsState('INCREMENT');
});

decrementBtn.addEventListener('click', () => {
    updateVitalsState('DECREMENT');
});

// Rehydrate settings automatically on interface load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('medcoreTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('is-dark-mode');
    }
});