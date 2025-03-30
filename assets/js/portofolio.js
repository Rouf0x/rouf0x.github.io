// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Initialize Typed.js for hero section
    const typed = new Typed('.typed-text', {
        strings: ['Lua Scripter & Programmer', 'Game Developer', 'Problem Solver', 'Innovative Thinker'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });

    // Floating Navigation
    const nav = document.querySelector('.floating-nav');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll event for nav background
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile nav toggle
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });

    // Initialize counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target;
            }
        });
    }
    
    // Start counter animation when section is in view
    const statsSection = document.querySelector('.stats-section');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounters();
            observer.unobserve(statsSection);
        }
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);

    // Initialize particles.js
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#6e57e0"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#6e57e0",
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.7
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Portfolio filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-fill');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
    
    // Start progress bar animation when section is in view
    const aboutSection = document.querySelector('.about-section');
    const aboutObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateProgressBars();
            aboutObserver.unobserve(aboutSection);
        }
    }, { threshold: 0.3 });
    
    aboutObserver.observe(aboutSection);

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Testimonials/Vouches System
    const testimonials = [
        {
            name: "Alex",
            role: "Owner of Infected Lands",
            avatar: "https://cdn.discordapp.com/avatars/726737307683651646/1cd1892315115b11e0c39121a27326d1?size=1024",
            stars: 5,
            text: "Describable in 3 words: Professional, fast and reliable. Kept me updated , set a realistic deadline yet finished even earlier.",
            project: "Infected Lands"
        },
        {
            name: "Eenex1",
            role: "Owner of Ex1 Empire",
            avatar: "https://cdn.discordapp.com/avatars/536463765361655818/f959fd71345fe85e79fd061dc17c4f68?size=1024",
            stars: 5,
            text: "I belive the service was perfect, fast and relieble",
            project: "Pet Hatchers [RNG🎲]"
        },
        {
            name: "Everlasting",
            role: "Unknown",
            avatar: "https://cdn.discordapp.com/avatars/492849408770179095/8535b1140edb75707efe4a1079fdf9d9?size=1024",
            stars: 5,
            text: "- Very good communication - Very quick work - Good pricing - One of the btter scripters I've worked with in my 5 years of development",
            project: "Dragging System"
        },
        {
            name: "IsmQ",
            role: "Owner of Pixel Forges",
            avatar: "https://cdn.discordapp.com/avatars/1056646984968183909/8967eacac667228ae0b2329f23e1b8e2?size=1024",
            stars: 5,
            text: "I am really happy with what you delivered, it' s been really fast and I probably need you tomorrow again lol 🔥💪",
            project: "3D Sprunki RP [1996! 🎉]"
        },
        {
            name: "Viper",
            role: "Wait 5 years Owner",
            avatar: "https://cdn.discordapp.com/avatars/1168580624290959431/af57650bb68a1cf5bdddf3c9ef210ff9?size=1024",
            stars: 5,
            text: "Im really happy with your work. Worked fast, fixed bugs, really active on discord. 10/10",
            project: "Global Timer System"
        }
    ];

    // Render testimonials
    const testimonialsContainer = document.querySelector('.testimonials-container');
    
    if (testimonialsContainer) {
        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card';
            testimonialCard.setAttribute('data-aos', 'fade-up');
            
            // Create stars HTML
            let starsHTML = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= testimonial.stars) {
                    starsHTML += '<i class="fas fa-star"></i>';
                } else {
                    starsHTML += '<i class="far fa-star empty"></i>';
                }
            }
            
            testimonialCard.innerHTML = `
                <div class="testimonial-header">
                    <img src="${testimonial.avatar}" alt="${testimonial.name}" class="testimonial-avatar">
                    <div class="testimonial-author">
                        <h4>${testimonial.name}</h4>
                        <p class="testimonial-role">${testimonial.role}</p>
                    </div>
                </div>
                <div class="testimonial-stars">${starsHTML}</div>
                <p class="testimonial-text">"${testimonial.text}"</p>
                <span class="testimonial-project">${testimonial.project}</span>
            `;
            
            testimonialsContainer.appendChild(testimonialCard);
        });
    }

    // Vouch Form Submission
    const vouchForm = document.getElementById('vouchForm');
    
    if (vouchForm) {
        // Star rating functionality
        const stars = vouchForm.querySelectorAll('.stars i');
        
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const rating = parseInt(this.getAttribute('data-rating'));
                const starsContainer = this.parentElement;
                
                // Update star display
                starsContainer.querySelectorAll('i').forEach((s, index) => {
                    if (index < rating) {
                        s.classList.remove('far');
                        s.classList.add('fas', 'active');
                    } else {
                        s.classList.remove('fas', 'active');
                        s.classList.add('far');
                    }
                });
                
                // Update hidden input value
                document.getElementById('ratingValue').value = rating;
            });
        });
        
        vouchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const name = formData.get('name');
            const role = formData.get('role');
            const project = formData.get('project');
            const rating = formData.get('rating');
            const message = formData.get('message');
            
            // Validate rating
            if (rating === '0') {
                alert('Please select a star rating');
                return;
            }
            
            // Here you would typically send the data to a server
            console.log('Vouch submitted:', { name, role, project, rating, message });
            
            // Show success message
            alert('Thank you for your vouch! It will be reviewed and displayed soon.');
            this.reset();
            
            // Reset stars
            stars.forEach(star => {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            });
            document.getElementById('ratingValue').value = '0';
        });
    }
});
