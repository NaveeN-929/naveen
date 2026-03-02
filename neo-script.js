/* Neo-Brutalist Portfolio Scripts - Exact Clone Functionality */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initLoader();
    initProgressBar();
    initThemeToggle();
    initNavigation();
    initAnimations();
    initGreetingAnimation();
    initSkillBars();
    initContactForm();
    
    console.log('🚀 Portfolio initialized successfully!');
});

// Loader functionality
function initLoader() {
    const loader = document.querySelector('.loader-overlay');
    const progressFill = document.querySelector('.loader-progress-fill');
    
    if (!loader || !progressFill) return;
    
    // Animate loader progress
    setTimeout(() => {
        progressFill.style.width = '100%';
    }, 500);
    
    // Hide loader after animation completes
    setTimeout(() => {
        loader.classList.add('fade-out');
        document.body.style.overflow = 'visible';
        
        // Remove loader from DOM after transition
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 800);
    }, 2500);
}

// Progress bar functionality
function initProgressBar() {
    const progressFill = document.querySelector('.progress-bar-fill');
    const checkpoints = document.querySelectorAll('.checkpoint');
    const sections = document.querySelectorAll('section[id]');
    
    if (!progressFill || !checkpoints.length || !sections.length) return;
    
    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / documentHeight) * 100;
        
        progressFill.style.width = `${Math.min(scrollPercent, 100)}%`;
        
        // Update checkpoints
        let activeSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                activeSection = section.getAttribute('id');
            }
        });
        
        // Update checkpoint states
        checkpoints.forEach(checkpoint => {
            const sectionName = checkpoint.getAttribute('data-section');
            if (sectionName === activeSection) {
                checkpoint.classList.add('active');
            } else {
                checkpoint.classList.remove('active');
            }
        });
    }
    
    // Throttled scroll handler
    let ticking = false;
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateProgress();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    updateProgress(); // Initial call
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle?.querySelector('i');
    
    if (!themeToggle) return;
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        
        // Animate theme change
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
    
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }
    
    themeToggle.addEventListener('click', toggleTheme);
    
    // Keyboard shortcut for theme toggle (Ctrl + T)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 't') {
            e.preventDefault();
            toggleTheme();
        }
    });
}

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    if (!navbar) return;
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    function handleNavbarScroll() {
        const scrollTop = window.pageYOffset;
        
        // Hide/show navbar based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        // Add background on scroll
        if (scrollTop > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
        
        lastScrollTop = scrollTop;
    }
    
    window.addEventListener('scroll', throttle(handleNavbarScroll, 100));
}

// Animation functionality
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.section-container, .highlight-item, .tech-badge');
    animatedElements.forEach(el => observer.observe(el));
    
    // Parallax effect for decorative elements
    const decorativeElements = document.querySelectorAll('.deco-code, .deco-terminal, .deco-floppy');
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        
        decorativeElements.forEach((element, index) => {
            const speed = (index + 1) * 0.1;
            const yPos = scrollTop * speed;
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    window.addEventListener('scroll', throttle(updateParallax, 16));
    
    // Random floating animation for loader shapes
    const loaderShapes = document.querySelectorAll('.loader-shape-svg');
    loaderShapes.forEach((shape, index) => {
        const delay = index * 0.5;
        shape.style.animationDelay = `${delay}s`;
    });
}

// Greeting animation with time-based messages
function initGreetingAnimation() {
    const greetingElement = document.getElementById('hero-greeting');
    if (!greetingElement) return;
    
    const greetings = [
        { text: 'Good morning! ☀️', startHour: 6, endHour: 12 },
        { text: 'Good afternoon! 🌤️', startHour: 12, endHour: 17 },
        { text: 'Good evening! 🌆', startHour: 17, endHour: 20 },
        { text: 'Working late? 🌙', startHour: 20, endHour: 24 },
        { text: 'Burning the midnight oil? 🌃', startHour: 0, endHour: 6 }
    ];
    
    const currentHour = new Date().getHours();
    const greeting = greetings.find(g => currentHour >= g.startHour && currentHour < g.endHour);
    
    if (greeting) {
        // Animate text change
        greetingElement.style.opacity = '0';
        setTimeout(() => {
            greetingElement.textContent = greeting.text;
            greetingElement.style.opacity = '1';
        }, 300);
    }
}

// Enhanced button interactions
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn-cta, .btn-coffee, .social-btn, .nav-cta, .nav-portfolio');
    
    buttons.forEach(button => {
        // Add click animation
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add hover sound effect trigger
        button.addEventListener('mouseenter', function() {
            // Trigger subtle hover animation
            this.style.transform = 'translate(-2px, -2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Utility functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Console easter egg
console.log(`
🎯 Welcome to Naveen Kumar's Portfolio!
👨‍💻 Built with pure HTML, CSS, and JavaScript
🎨 Neo-brutalist design inspired by Marjo Ballabani
⚡ Optimized for performance and accessibility

Want to see the source code? Check out:
📧 Email: naveenrayan29@gmail.com
🔗 GitHub: https://github.com/naveenkumar
💼 LinkedIn: https://www.linkedin.com/in/naveenkumar/

Theme toggle shortcut: Ctrl + T
`);

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            console.log(`⚡ Page loaded in ${loadTime}ms`);
        }, 0);
    });
}

// Export functions for potential external use
window.PortfolioApp = {
    setTheme: (theme) => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    },
    getTheme: () => document.body.getAttribute('data-theme'),
    scrollToSection: (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
};

// Add ripple effect CSS if not already present
if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            animation: rippleEffect 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes rippleEffect {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Advanced animations for enhanced UX
function initAdvancedAnimations() {
    // Typing effect for hero name
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const text = heroName.textContent;
        heroName.textContent = '';
        
        setTimeout(() => {
            let index = 0;
            const typeInterval = setInterval(() => {
                heroName.textContent += text[index];
                index++;
                if (index >= text.length) {
                    clearInterval(typeInterval);
                }
            }, 100);
        }, 1000);
    }
    
    // Stagger animation for tech badges
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.1}s`;
    });
}

// Initialize advanced features
setTimeout(initAdvancedAnimations, 3000);
setTimeout(initButtonEffects, 1000);

// Skill bars animation
function initSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillFill = entry.target;
                const level = skillFill.getAttribute('data-level');
                skillFill.style.width = `${level}%`;
                skillObserver.unobserve(skillFill);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillFills.forEach(fill => skillObserver.observe(fill));
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        // Show loading state
        const submitBtn = contactForm.querySelector('.form-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handler)
        setTimeout(() => {
            // Success animation
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'var(--tertiary)';
            
            // Create success message
            const successMsg = document.createElement('div');
            successMsg.className = 'form-success-message';
            successMsg.innerHTML = `
                <div style="
                    background: var(--tertiary);
                    border: 3px solid var(--border);
                    padding: 1rem 2rem;
                    margin-top: 1rem;
                    box-shadow: var(--shadow-light);
                    font-family: var(--font-display);
                    font-weight: 700;
                    text-transform: uppercase;
                ">
                    <i class="fas fa-check-circle"></i> Thank you! I'll get back to you soon.
                </div>
            `;
            contactForm.appendChild(successMsg);
            
            // Reset form after delay
            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                if (successMsg.parentNode) {
                    successMsg.parentNode.removeChild(successMsg);
                }
            }, 3000);
            
            // Log form data (for demo purposes)
            console.log('Form submitted with data:', formValues);
            
        }, 1500);
    });
    
    // Enhanced form interactions
    const formInputs = contactForm.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translate(-2px, -2px)';
            this.style.boxShadow = '4px 4px 0 var(--border)';
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.value) {
                this.style.background = 'var(--primary)';
            } else {
                this.style.background = 'var(--bg-primary)';
            }
        });
    });
}