const driverFormHandler = async (event) => {
    event.preventDefault();
  console.log("driverFormHandler");
    const destination = document.querySelector('#destination').value;
    const pickup = document.querySelector('#pickup').value;
    const price = document.querySelector('#price').value;
    const description = document.querySelector('#description').value;
    //change these 
    const num_seats = "3";
    const driver_name = "erin";
  
    if (destination && pickup && price && description && num_seats && driver_name) {
      const response = await fetch('/api/drive-routes/', {
        method: 'POST',
        body: JSON.stringify({ destination, pickup, price, description, num_seats, driver_name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard'); 
      } else {
        alert('Failed to create.');
      }
    }
  };
  
  
  
  document
    .querySelector('.driver-form')
    .addEventListener('click', driverFormHandler);
  
