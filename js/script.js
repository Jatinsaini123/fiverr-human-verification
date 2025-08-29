// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to key elements
    const loader = document.querySelector('.loader');
    const loadingText = document.querySelector('.loading-text');
    const challengeSection = document.querySelector('.challenge');
    
    // Simulate loading challenge behavior
    let loadingStates = [
        'Loading challenge',
        'Loading challenge.',
        'Loading challenge..',
        'Loading challenge...'
    ];
    
    let currentStateIndex = 0;
    
    // Animate loading text with dots
    const loadingInterval = setInterval(() => {
        if (loadingText) {
            loadingText.textContent = loadingStates[currentStateIndex];
            currentStateIndex = (currentStateIndex + 1) % loadingStates.length;
        }
    }, 500);
    
    // Simulate challenge completion after 5 seconds
    setTimeout(() => {
        clearInterval(loadingInterval);
        
        if (loadingText) {
            loadingText.textContent = 'Challenge ready';
            loadingText.style.color = '#1dbf73';
        }
        
        if (loader) {
            loader.style.borderTopColor = '#1dbf73';
            loader.style.animationDuration = '2s';
        }
        
        // Add a subtle success indication
        setTimeout(() => {
            if (loader) {
                loader.style.display = 'none';
            }
            if (loadingText) {
                loadingText.textContent = 'Please complete the verification below';
                loadingText.style.fontSize = '14px';
                loadingText.style.color = '#62646a';
            }
        }, 2000);
        
    }, 5000);
    
    // Add smooth scroll behavior for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
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
    
    // Add hover effects to quick fixes items
    const quickFixesItems = document.querySelectorAll('.quick-fixes li');
    quickFixesItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
            this.style.borderRadius = '4px';
            this.style.padding = '8px 12px 8px 20px';
            this.style.margin = '0 -12px 16px -12px';
            this.style.transition = 'all 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.padding = '0 0 0 20px';
            this.style.margin = '0 0 16px 0';
        });
    });
    
    // Console log for debugging
    console.log('Fiverr Challenge Page Loaded');
    console.log('Simulating human verification challenge...');
});

// Global error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript Error:', {
        message: e.message,
        filename: e.filename,
        lineno: e.lineno,
        colno: e.colno,
        error: e.error
    });
    
    // Graceful fallback - show a user-friendly message
    const errorMessage = document.createElement('div');
    errorMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ffebee;
        color: #c62828;
        padding: 12px 16px;
        border-radius: 4px;
        border-left: 4px solid #c62828;
        font-size: 14px;
        z-index: 1000;
        max-width: 300px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    `;
    errorMessage.textContent = 'An error occurred. Please refresh the page.';
    document.body.appendChild(errorMessage);
    
    // Auto-remove error message after 5 seconds
    setTimeout(() => {
        if (errorMessage.parentNode) {
            errorMessage.parentNode.removeChild(errorMessage);
        }
    }, 5000);
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled Promise Rejection:', e.reason);
    e.preventDefault(); // Prevent the default browser behavior
});

// Add performance monitoring
window.addEventListener('load', function() {
    // Log page load performance
    if (window.performance && window.performance.timing) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    }
});

// Detect if JavaScript is working properly
(function() {
    const jsWorking = document.createElement('meta');
    jsWorking.name = 'js-enabled';
    jsWorking.content = 'true';
    document.head.appendChild(jsWorking);
})();
