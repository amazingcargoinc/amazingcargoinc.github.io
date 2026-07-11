const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#contact-form');

form?.addEventListener('submit', event => {
  event.preventDefault();

  const data = new FormData(form);
  const subject = encodeURIComponent(`Website inquiry: ${data.get('service')}`);
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Phone: ${data.get('phone')}
Email: ${data.get('email')}
Interested in: ${data.get('service')}

Message:
${data.get('message')}`
  );

  window.location.href = `mailto:nikola@amazingcargoinc.com?subject=${subject}&body=${body}`;
});
