// main.js

const form = document.getElementById('grievanceForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Retrieve form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const complaintType = document.getElementById('complaintType').value;
  const society = document.getElementById('society').value;
  const feedback = document.getElementById('feedback').value;
 
  const phoneNumberRegex = /^\d{10}$/; // Regex for 10-digit phone number
const isValidPhoneNumber = phoneNumberRegex.test(mobile);
  // Check for empty fields
  if (!name || !email || !mobile || !complaintType || !society || !feedback) {
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.innerText = 'Please fill in all fields.';
    form.appendChild(errorMessage);
    return;
  }
  else if (!isValidPhoneNumber) {
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.innerText = 'Please enter a valid 10-digit phone number.';
    form.appendChild(errorMessage);
    return;
  }
  else if (feedback.trim().split(/\s+/).length < 20) {
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.innerText = 'Please provide at least 20 words in the Complaint/Feedback section.';
    form.appendChild(errorMessage);
    return;
  }
  // Remove any existing error message
  const errorMessage = document.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }

  // Create an object to store form data
  const formData = {
    name: name,
    email: email,
    mobile: mobile,
    complaintType: complaintType,
    society: society,
    feedback: feedback
  };

  // Retrieve existing data from Local Storage or initialize an empty array
  const existingData = JSON.parse(localStorage.getItem('formData')) || [];

  // Add the new form data to the existing array
  existingData.push(formData);

  // Store the updated array in Local Storage
  localStorage.setItem('formData', JSON.stringify(existingData));

  // Redirect to the display.html page
  window.location.href = 'display.html';

});
