const studentName = "Vraj Patel";
const studentNumber = "1243437";
console.log(`${studentName} - ${studentNumber}`);

const headingPrimaryContent = document.querySelector('h1');
headingPrimaryContent.innerHTML = `${studentName} - ${studentNumber}`;
headingPrimaryContent.classList.add("headingPrimary");