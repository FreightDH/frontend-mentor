function initAccordion() {
  const list = document.querySelector('.faq__list');
  const items = document.querySelectorAll('.faq__item');
  const textElements = document.querySelectorAll('.item__text');

  list.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('.item__title')) {
      items.forEach((item) => item.classList.remove('active'));
      textElements.forEach((item) => (item.style.maxHeight = null));
      target.parentElement.classList.add('active');

      const text = target.nextElementSibling;
      if (text.style.maxHeight) {
        text.style.maxHeight = null;
      } else {
        text.style.maxHeight = text.scrollHeight + 'px';
      }
    }
  });
}

initAccordion();
