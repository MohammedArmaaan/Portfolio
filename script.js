        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Loading Animation
        window.addEventListener('load', () => {
            gsap.to('#loading-screen', {
                opacity: 0,
                duration: 1,
                ease: 'power2.out',
                onComplete: () => {
                    document.getElementById('loading-screen').style.display = 'none';
                    initAnimations();
                }
            });
        });

        function initAnimations() {
            // Section Title Animations
            gsap.utils.toArray('.section-title').forEach(title => {
                gsap.from(title, {
                    scrollTrigger: {
                        trigger: title,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                });
            });

            // About Section Animation
            gsap.from('#about .max-w-4xl', {
                scrollTrigger: {
                    trigger: '#about .max-w-4xl',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('#about .info-item', {
                scrollTrigger: {
                    trigger: '#about .info-item',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });

            // Skills Animation
            gsap.utils.toArray('.skill-card').forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: 'power3.out'
                });
            });

            // Skill Bars Animation - Animate all bars in a card together
            gsap.utils.toArray('.skill-card').forEach(card => {
                const skillBars = card.querySelectorAll('.skill-bar');
                const percentages = card.querySelectorAll('.skill-item .text-blue-600');

                skillBars.forEach((bar, index) => {
                    const percentage = percentages[index].textContent; // Get the percentage from the text
                    gsap.set(bar, { width: '0%' }); // Set initial width to 0%

                    gsap.to(bar, {
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 70%',
                            end: 'bottom 30%',
                            toggleActions: 'play none none reverse'
                        },
                        width: percentage, // Use the percentage from the HTML
                        duration: 1.5,
                        ease: 'power2.out'
                    });
                });
            });

            // Projects Animation
            gsap.utils.toArray('.project-card').forEach((card, index) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    rotation: 5,
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: 'back.out(1.7)'
                });
            });

            // Timeline Animation
            gsap.utils.toArray('.timeline-item').forEach((item, index) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    },
                    x: index % 2 === 0 ? -100 : 100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                });
            });

            // Contact Section Animation
            gsap.from('.contact-info', {
                scrollTrigger: {
                    trigger: '.contact-info',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.contact-form', {
                scrollTrigger: {
                    trigger: '.contact-form',
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            // Navbar Animation on Scroll
            ScrollTrigger.create({
                start: 'top -80',
                end: 99999,
                toggleClass: { className: 'scrolled', targets: '#navbar' }
            });

            // Parallax Effect for Floating Shapes
            gsap.utils.toArray('.floating-shape').forEach(shape => {
                gsap.to(shape, {
                    scrollTrigger: {
                        trigger: shape,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true
                    },
                    y: -100,
                    rotation: 360,
                    ease: 'none'
                });
            });
        }

        // Create 3D Particle System
        function createParticles() {
            const container = document.getElementById('particles-container');
            const particleCount = 100;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';

                // Random position
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';

                container.appendChild(particle);

                // GSAP animation for particles
                gsap.to(particle, {
                    y: -window.innerHeight,
                    x: (Math.random() - 0.5) * 200,
                    opacity: 0,
                    duration: Math.random() * 10 + 5,
                    repeat: -1,
                    delay: Math.random() * 5,
                    ease: 'none'
                });
            }
        }

        // Create Interactive Grid
        function createGrid() {
            const container = document.getElementById('grid-container');
            const gridSize = 20;

            // Horizontal lines
            for (let i = 0; i <= gridSize; i++) {
                const line = document.createElement('div');
                line.className = 'grid-line';
                line.style.top = (i / gridSize) * 100 + '%';
                line.style.width = '100%';
                container.appendChild(line);
            }

            // Vertical lines
            for (let i = 0; i <= gridSize; i++) {
                const line = document.createElement('div');
                line.className = 'grid-line vertical';
                line.style.left = (i / gridSize) * 100 + '%';
                container.appendChild(line);
            }
        }

        // Mouse Movement Effects
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            // Parallax effect for floating shapes
            gsap.utils.toArray('.floating-shape').forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                gsap.to(shape, {
                    x: (mouseX - 0.5) * speed * 50,
                    y: (mouseY - 0.5) * speed * 50,
                    duration: 1,
                    ease: 'power2.out'
                });
            });

            // Grid interaction
            gsap.utils.toArray('.grid-line').forEach(line => {
                gsap.to(line, {
                    opacity: 0.1 + mouseY * 0.3,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
        });

        // Scroll Progress Indicator
        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.getElementById('scroll-progress').style.width = scrolled + '%';
        });

        // Smooth Scrolling for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form Submission
        document.getElementById('contact-form').addEventListener('submit', function (e) {
            e.preventDefault();

            // Animate form submission
            gsap.to(this, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut',
                onComplete: () => {
                    alert('Thank you for your message! I\'ll get back to you soon.');
                    this.reset();
                }
            });
        });

        // Mobile Menu Toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            // Add mobile menu functionality here
            console.log('Mobile menu clicked');
        });

        // Typing Effect
        function initTypingEffect() {
            const texts = [
                'Full Stack Developer',
                'PHP Developer',
                'Web Developer',
                'Python Developer'
            ];

            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            const typingElement = document.getElementById('typing-text');

            function typeText() {
                const currentText = texts[textIndex];

                if (isDeleting) {
                    typingElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    typingElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                }

                let typeSpeed = isDeleting ? 50 : 100;

                if (!isDeleting && charIndex === currentText.length) {
                    typeSpeed = 2000; // Pause at end
                    isDeleting = true;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typeSpeed = 500; // Pause before next text
                }

                setTimeout(typeText, typeSpeed);
            }

            typeText();
        }

        // Dark Mode Toggle
        function initDarkMode() {
            const darkModeToggle = document.getElementById('dark-mode-toggle');
            const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
            const body = document.body;

            // Check for saved theme preference
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                body.classList.add('dark');
                updateToggleIcon(true);
            }

            function toggleDarkMode() {
                body.classList.toggle('dark');
                const isDark = body.classList.contains('dark');
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                updateToggleIcon(isDark);
            }

            function updateToggleIcon(isDark) {
                const icon = isDark ? 'fa-sun' : 'fa-moon';
                darkModeToggle.querySelector('i').className = `fas ${icon} text-gray-700`;
                darkModeToggleMobile.querySelector('i').className = `fas ${icon} text-gray-700`;
            }

            darkModeToggle.addEventListener('click', toggleDarkMode);
            darkModeToggleMobile.addEventListener('click', toggleDarkMode);
        }

        // Initialize everything
        createParticles();
        createGrid();
        initTypingEffect();
        initDarkMode();

        // Add CSS for scrolled navbar
        const style = document.createElement('style');
        style.textContent = `
            .scrolled {
                background: rgba(255, 255, 255, 0.98) !important;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1) !important;
            }
            .dark .scrolled {
                background: rgba(15, 23, 42, 0.98) !important;
            }
        `;
        document.head.appendChild(style);
