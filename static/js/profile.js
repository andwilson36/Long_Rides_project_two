const logout = async () => {
  const response = await fetch('/api/user-routes/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out.');
  }
};

const handleDriverForm = async (event) => {
  event.preventDefault();

  const insurance = document.querySelector('#provider').value.trim();
  const make = document.querySelector('#make').value.trim();
  const model = document.querySelector('#model').value.trim();
  const year = document.querySelector('#year').value.trim();
  const username = document.querySelector('#user').value.trim();

  if (insurance && make && model && year) {
    const response = await fetch(`/api/user-routes/${username}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    })

    if (response.ok) {
      document.location.replace('/driver');
    } else {
      alert('Failed to verify.');
    }
  } else {
    alert('Failed to verify.');
  }
}

document
  .querySelector('#logout')
  .addEventListener('click', logout);

document
  .querySelector('#driver-form')
  .addEventListener('submit', handleDriverForm);