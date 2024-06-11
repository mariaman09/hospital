function validateForm(event) {
    event.preventDefault();
  
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let middleName = document.getElementById('middleName');
    let placeofresidence = document.getElementById('placeofresidence');
  
    let firstNameError = document.getElementById('firstNameError');
    let lastNameError = document.getElementById('lastNameError');
    let middleNameError = document.getElementById('middleNameError');
    let placeofresidenceError = document.getElementById('placeofresidenceError');
  
    if (!/^[А-Яа-яЁё\s]+$/.test(firstName.value)) {
      firstName.style.borderColor = "red";
      firstNameError.textContent = "Поле должно содержать только кириллицу";
      event.preventDefault();
    } else {
      firstName.style.borderColor = "";
      firstNameError.textContent = "";
    }
  
    if (!/^[А-Яа-яЁё\s]+$/.test(lastName.value)) {
      lastName.style.borderColor = "red";
      lastNameError.textContent = "Поле должно содержать только кириллицу";
      event.preventDefault();
    } else {
      lastName.style.borderColor = "";
      lastNameError.textContent = "";
    }
  
    if (!/^[А-Яа-яЁё\s]+$/.test(middleName.value) && middleName.value !== "") {
      middleName.style.borderColor = "red";
      middleNameError.textContent = "Поле должно содержать только кириллицу";
      event.preventDefault();
    } else {
      middleName.style.borderColor = "";
      middleNameError.textContent = "";
    }
    if (!/^[А-Яа-яЁё\s]+$/.test(placeofresidence.value)) {
      placeofresidence.style.borderColor = "red";
      placeofresidenceError.textContent = "Поле должно содержать только кириллицу";
      event.preventDefault();
    } else {
      placeofresidence.style.borderColor = "";
      placeofresidenceError.textContent = "";
    }
}
let dateInput = document.getElementById('dateInput');

dateInput.addEventListener('change', function() {
    let selectedDate = dateInput.value;
    console.log('Выбранная дата обращения:', selectedDate);
});
let options = document.querySelectorAll('#options li');
options.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.toggle('selected');
    });
});
let blood = document.querySelectorAll('#blood li');
blood.forEach(blood => {
  blood.addEventListener('click', () => {
    blood.classList.toggle('selected');
    });
});
let observation = document.querySelectorAll('#observation li');
observation.forEach(observation => {
  observation.addEventListener('click', () => {
    observation.classList.toggle('selected');
    });
});
let playingsports = document.querySelectorAll('#playingsports li');
playingsports.forEach(playingsports => {
  playingsports.addEventListener('click', () => {
    playingsports.classList.toggle('selected');
    });
});
let allergy = document.querySelectorAll('#allergy li');
allergy.forEach(allergy => {
  allergy.addEventListener('click', () => {
    allergy.classList.toggle('selected');
    });
});
let pressure = document.querySelectorAll('#pressure li');
pressure.forEach(pressure => {
  pressure.addEventListener('click', () => {
    pressure.classList.toggle('selected');
    });
});
document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let messageInput = form.querySelector('#message');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    let message = messageInput.value;
    alert('Вы ввели сообщение: ' + message);
  });
});
document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let medicineUseInput = form.querySelector('#medicine-use');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    let medicineUse = medicineUseInput.value;
    alert('Введенное применение препаратов: ' + medicineUse);
  });
});