const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.addEventListener('click', function(e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});

const options = {
  threshold: 0.1 // Change as needed
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, options);

const boxElements = document.querySelectorAll('.box');
boxElements.forEach((el) => observer.observe(el));
