const form = document.getElementById('form');
form.addEventListener('submit', formSend);

function formSend(event) {
  event.preventDefault();

  const errorCount = formValidate(form);

  if (errorCount) {
    alert('Заполните все обязательные поля!');
  } else {
    alert('Валидация пройдена!');
  }
}

function formValidate(form) {
  const inputRequired = form.querySelectorAll('.--req');
  let errorCount = 0;

  inputRequired.forEach((input) => {
    formRemoveError(input);

    switch (input.getAttribute('type')) {
      case 'email': {
        if (input.value === '' || !testEmail(input.value)) {
          formAddError(input);
          errorCount++;
        }
        break;
      }
      case 'password': {
        if (input.value === '' || input.value.length < 8) {
          formAddError(input);
          errorCount++;
        }
        break;
      }
      default: {
        if (input.value === '') {
          formAddError(input);
          errorCount++;
        }
        break;
      }
    }
  });

  return errorCount;
}

function formAddError(element) {
  element.classList.add('--err');
  element.parentElement.classList.add('--err');
}

function formRemoveError(element) {
  element.classList.remove('--err');
  element.parentElement.classList.remove('--err');
}

function testEmail(email) {
  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
  );
  return regex.test(email);
}
