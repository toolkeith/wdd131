const currentYear = document.querySelector('#currentyear');

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;

const lastModified = document.lastModified;

document.getElementById(
  'lastModified'
).textContent = `Last Modification: ${lastModified}`;
