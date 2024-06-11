function editProfile() {
  const inputs = document.querySelectorAll('input, select');
  inputs.forEach(input => {
    input.removeAttribute('disabled');
  });
  document.querySelector('button').innerText = 'Сохранить';
  document.querySelector('button').setAttribute('onclick', 'saveChanges()');
}

function saveChanges() {
  const form = document.getElementById('personalDetailsForm');
  if (form.checkValidity()) {
    // Добавьте здесь код для сохранения изменений
    alert('Изменения сохранены!');
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.setAttribute('disabled', true);
    });
    document.querySelector('button').innerText = 'Редактировать';
    document.querySelector('button').setAttribute('onclick', 'editProfile()');
  } else {
    alert('Пожалуйста, заполните все поля корректно.');
  }
}