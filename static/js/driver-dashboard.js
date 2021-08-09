const createRideFormHandler = async (event) => {
    event.preventDefault();

    const pickup = document.querySelector('#pickup').value;
    const destination = document.querySelector('#destination').value;
    const price = document.querySelector('#price').value;
    const num_seats = document.querySelector('#num_seats').value.trim();
    const description = document.querySelector('#description').value;
    const driver_name = document.querySelector('#user').value;
    console.log(pickup);
    if (pickup && destination && price && num_seats && description && driver_name) {
        const response = await fetch('/api/drive-routes/', {
            method: 'POST',
            body: JSON.stringify({ pickup, destination, price, num_seats, description, driver_name }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/driver');
        } else {
            alert('Failed to create ride.');
        }
    } else {
        alert('Failed to create ride.');
    }
};

document
    .querySelector('.driver-form')
    .addEventListener('submit', createRideFormHandler);