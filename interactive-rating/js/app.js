function start() {
  const buttons = document.querySelector('.active__buttons');
  const grades = document.querySelectorAll('.active__value');
  const submitButton = document.querySelector('.active__submit');
  const activeCard = document.querySelector('.rating__active');
  const thanksCard = document.querySelector('.rating__thanks');

  let grade = 1;

  buttons.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('.active__value')) {
      grade = target.dataset.value;
      grades.forEach((item) => item.classList.remove('active'));
      target.classList.add('active');
    }
  });

  submitButton.addEventListener('click', () => {
    if (Array.from(grades).some((item) => item.classList.contains('active'))) {
      document.querySelector('.thanks__grade span').textContent = `${grade}`;
      activeCard.classList.add('hidden');
      thanksCard.classList.add('active');
    }
  });
}

start();
