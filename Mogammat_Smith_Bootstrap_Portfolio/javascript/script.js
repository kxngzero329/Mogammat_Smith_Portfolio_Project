// Add typing effect
const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');
const texts = ['WEB DEVELOPER', 'WEB DESIGNER', 'JUNIOR FRONT-END DEVELOPER'];
let currentTextIndex = 0;
let currentCharIndex = 0;

function typeText() {
  if (currentCharIndex < texts[currentTextIndex].length) {
    typedText.textContent += texts[currentTextIndex][currentCharIndex];
    currentCharIndex++;
    setTimeout(typeText, 100); 
  } else {
    setTimeout(eraseText, 2000); 
  }
}

// Erase typing effect
function eraseText() {
  if (currentCharIndex > 0) {
    typedText.textContent = typedText.textContent.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    setTimeout(eraseText, 50); 
  } else {
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    currentCharIndex = 0;
    setTimeout(typeText, 500);
  }
}

typeText();

//progress bar
document.addEventListener("DOMContentLoaded", function() {
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach((bar) => {
    const skillLevel = bar.getAttribute("data-skill");
    bar.style.width = skillLevel + "%";
  });
});