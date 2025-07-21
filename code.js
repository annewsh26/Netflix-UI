

const questions = document.querySelectorAll('.faq-question');

questions.forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.toggle('active');
    answer.style.display = isOpen ? 'block' : 'none';
  });
});
