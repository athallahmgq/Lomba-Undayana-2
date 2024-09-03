document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.3) rotateX(15deg) rotateY(15deg)';
      icon.style.transition = 'transform 0.3s ease';
  });
  icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1) rotateX(0) rotateY(0)';
  });
});
  