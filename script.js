const cards = document.querySelectorAll('.cards');

  // 2. Create an observer (built-in browser API)
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // reveal animation
        observer.unobserve(entry.target);   // optional: stop observing
      }
    });
  }, { threshold: 0.2 }); // reveal when 20% of card is visible

  // 3. Observe each card
  cards.forEach(card => observer.observe(card));