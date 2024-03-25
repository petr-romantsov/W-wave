(() => {

  //функция создания ошибки
  function createError(input, errorText) {

    const wrapper = input.parentNode;
    const error = document.createElement('p');
    error.classList.add('error-message');

    error.style.margin = '0';
    error.style.paddingLeft = '25px'
    error.textContent = errorText;
    error.style.color = 'rgb(221, 11, 11)';
    input.classList.add('error');

    wrapper.prepend(error);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const form = document.getElementById('form');
    const nameInput = document.getElementById('name-input');
    const mailInput = document.getElementById('mail-input');
    const textarea = document.getElementById('textarea');
    const allInputs = document.querySelectorAll('.form__item');

    for (let input of allInputs) {

      //очистка ошибок
      if (input.classList.contains('error')) {
        input.classList.remove('error');
        form.querySelector('.error-message').remove();
      }

      //проверка на заполненность
      if (input.value.trim() == '') {
        createError(input, 'Поле не заполнено!');
        return;
      }
    }

    //очистка инпутов после отправки формы
    nameInput.value = '';
    mailInput.value = '';
    textarea.value = '';

  });


})();
