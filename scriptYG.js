// scripts.js
function sendMessage(event) {
  event.preventDefault();

  const form = event.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  fetch('http://localhost:9080/api/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you! Your message has been sent.');
      form.reset();
    } else {
      alert('Oops! Something went wrong.');
    }
  })
  .catch(error => console.error('Error:', error));
}
