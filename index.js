(function () {
  var form = document.querySelector('#contact-form');
  var formSuccess = document.querySelector('#contact-form-success');
  var formError = document.querySelector('#contact-form-error');
  var spinner = document.querySelector('.spinner');

  if (!form) {
    return;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var data = {};
    var formElements = Array.from(form);
    formElements.map(input => (data[input.name] = input.value));

    spinner.classList.remove('hidden');

    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = response => {
      if (response.target.status === 200) {
        form.reset();
        spinner.classList.add('hidden');
        formSuccess.classList.remove('hidden');
      } else {
        spinner.classList.add('hidden');
        formError.classList.remove('hidden');
      }
    };
  });

  document.querySelectorAll('.alert-close').forEach(function (element) {
    element.addEventListener('click', function () {
      element.closest('.alert').classList.add('hidden');
    });
  });
})();
