function setValue(pickup, destination) {
  let startingAddress;
  let endingAddress;

  switch (pickup) {
    case 'UT Campus':
      startingAddress = 'University of Texas, Austin, TX';
      break;
    case 'Austin Airport':
      startingAddress = '3600 Presidential Blvd, Austin, TX 78719';
      break;
    case 'Rainey Street':
      startingAddress = '2207 Lou Neff Rd, Austin, TX 78746';
      break;
    case 'Barton Springs Pool':
      startingAddress = 'Barton Springs Rd, Austin, TX 78704'
  }
  switch (destination) {
    case 'UT Campus':
      endingAddress = 'University of Texas, Austin, TX';
      break;
    case 'Austin Airport':
      endingAddress = '3600 Presidential Blvd, Austin, TX 78719';
      break;
    case 'Rainey Street':
      endingAddress = '2207 Lou Neff Rd, Austin, TX 78746';
      break;
    case 'Zilker Park':
      endingAddress = '2207 Lou Neff Rd, Austin, TX 78746'
      break;
    case 'Barton Springs Pool':
      endingAddress = 'Barton Springs Rd, Austin, TX 78704'
      break;
  }

  document.getElementById('start').value = startingAddress;
  document.getElementById('end').value = endingAddress;
}