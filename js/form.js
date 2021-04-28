function sendForm(form) {
  var storage = new Storage("form");
  var thisForm = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  }

  if (storage.downloadLocal() == null) {
    var forms = [thisForm]
    storage.uploadLocal(JSON.stringify(forms));
  } else {
    var stringForms = storage.downloadLocal();
    var forms = JSON.parse(stringForms);
    forms.push(thisForm);
    storage.uploadLocal(JSON.stringify(forms));
  }
  // storage.uploadLocal("\nImię i nazwisko: " + form.name.value + "\nE-mail: " + form.email.value + "\nNumer telefonu: " + form.phone.value + "\nTreść wiadomości: " + form.message.value);
  alert("Wysłano formularz z następjącymi danymi:\n" + "\nImię i nazwisko: " + form.name.value + "\nE-mail: " + form.email.value + "\nNumer telefonu: " + form.phone.value + "\nTreść wiadomości: " + form.message.value);
}
