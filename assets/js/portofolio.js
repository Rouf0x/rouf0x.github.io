// Typed text effect
const typedTextElement = document.getElementById('typed-text');
const text = "Hi! I'm a french coding enthusiast. I really like anything related to computer science!";
let index = 0;
let deleting = false;

function typeText() {
  if (!deleting && index < text.length) {
    typedTextElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 50);
  } else if (deleting && index > 1) {
    typedTextElement.innerHTML = text.substring(0, index - 1);
    index--;
    setTimeout(typeText, 25);
  } else if (!deleting && index === text.length) {
    setTimeout(() => { deleting = true; typeText(); }, 4000);
  } else if (deleting && index === 1) {
    deleting = false;
    setTimeout(typeText, 50);
  }
}

typeText();

// Add a parallax effect to the hero section
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const scrollPosition = window.pageYOffset;
  hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Add animation to project cards on scroll
const projects = document.querySelectorAll('.project');
const animateOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    } else {
      entry.target.style.opacity = 0;
      entry.target.style.transform = 'translateY(20px)';
    }
  });
};

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver(animateOnScroll, options);
projects.forEach(project => {
  project.style.opacity = 0;
  project.style.transform = 'translateY(20px)';
  project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(project);
});
