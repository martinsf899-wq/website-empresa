const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#nome').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#mensagem').value.trim();
  const subject = encodeURIComponent(`Contacto do website - ${name}`);
  const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`);
  window.location.href = `mailto:empresa@exemplo.pt?subject=${subject}&body=${body}`;
});
