document.addEventListener('DOMContentLoaded', function(){
  // Toggle mobile nav (works se tiveres um botão .nav-toggle)
  function setupToggle(btnId, navSelector){
    const btn = document.getElementById(btnId);
    if(!btn) return;
    btn.addEventListener('click', function(){
      const nav = document.querySelector('.nav');
      if(!nav) return;
      nav.style.display = (nav.style.display === 'flex')? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '1rem';
    });
  }
  setupToggle('navToggle');
  setupToggle('navToggle2');

  // Newsletter placeholder
  const newsletter = document.getElementById('newsletterForm');
  if(newsletter){
    newsletter.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Obrigado pela subscrição — iremos enviar novidades por e‑mail.');
      newsletter.reset();
    });
  }

  // Contact form placeholder
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Mensagem enviada. Obrigado — responderemos em breve.');
      contactForm.reset();
    });
  }

  // Booking form placeholder
  const booking = document.getElementById('bookingForm');
  if(booking){
    booking.addEventListener('submit', function(e){
      e.preventDefault();
      // Aqui podes integrar com API de reservas
      alert('Reserva solicitada. Receberás confirmação por e‑mail.');
      booking.reset();
    });
  }
});