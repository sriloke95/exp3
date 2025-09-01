function validateForm() {
  const form = document.getElementById('registrationForm');
  const phone = form.phone.value.trim();
  const email = form.email.value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // Collect form data
  const formData = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    fatherName: form.fatherName.value,
    motherName: form.motherName.value,
    dob: form.dob.value,
    gender: form.gender.value,
    address: form.address.value,
    qualification: form.qualification.value,
    education: form.education.value,
    email: form.email.value,
    phone: form.phone.value
  };

  // Open a new window to show submitted data
  const newWin = window.open("", "_blank");
  newWin.document.write("<h2>Submitted User Details</h2>");
  for (let key in formData) {
    newWin.document.write(`<p><strong>${key}:</strong> ${formData[key]}</p>`);
  }

  // Show uploaded file names (Photo & Signature)
  newWin.document.write(`<p><strong>Photo:</strong> ${form.photo.files[0]?.name || "Not uploaded"}</p>`);
  newWin.document.write(`<p><strong>Signature:</strong> ${form.signature.files[0]?.name || "Not uploaded"}</p>`);

  return false; // prevent actual form submission
}
