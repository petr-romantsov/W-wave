(() => {

  //функция создания ошибки
  function createError(input, errorText) {

    const wrapper = input.parentNode;
    const error = document.createElement('p');
    error.classList.add('error-message');
    error.textContent = errorText;
    input.classList.add('error');

    wrapper.prepend(error);
  }

  const checkboxInput = document.getElementById('checkbox');

  //событие клика на чекбокс для валидации формы
  checkboxInput.addEventListener('click', () => { 
    //если атрибут есть - удалить, нет - добавить
    checkboxInput.hasAttribute('checked') ? 
    checkboxInput.removeAttribute('checked') : 
    checkboxInput.setAttribute('checked', '');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    //переменные для валидации формы
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name-input');
    const mailInput = document.getElementById('mail-input');
    const textarea = document.getElementById('textarea');
    const allInputs = form.querySelectorAll('.form__item');

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
    
    //очистка ошибки у чекбокса
    if (checkboxInput.classList.contains('error')) { 
      checkboxInput.classList.remove('error');
      form.querySelector('.error-message').remove();
    }

    //проверка отметки о согласии 
    if (!checkboxInput.checked) { 
      createError(checkboxInput, 'Нужно ваше согласие');
      return;
    } 

    //очистка инпутов после отправки формы
    nameInput.value = '';
    mailInput.value = '';
    textarea.value = '';

  });

})();
