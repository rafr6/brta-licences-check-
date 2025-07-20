
const licenseData = {
  "DK0897294CH0874": {
    name: "Ajharul Islam",
    dob: "02 February 1999",
    bloodGroup: "B+",
    father: "Abdur Rahman",
    issueDate: "02 February 2021",
    validity: "02 February 2031",
    licenceNo: "DK0897294CH0874",
    authority: "BRTA, Dhaka Metro",
    address: "Dhanmondi, Dhaka",
    classes: "Non-Professional"
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const resultDiv = document.getElementById('result');
  const detailsList = document.getElementById('detailsList');

  if (id && licenseData[id]) {
    const data = licenseData[id];
    detailsList.innerHTML = '';
    for (let key in data) {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${toLabel(key)}:</strong> ${data[key]}`;
      detailsList.appendChild(li);
    }
    resultDiv.classList.remove('hidden');
  } else {
    resultDiv.innerHTML = '<p style="color:red;">Licence not found or invalid QR link.</p>';
    resultDiv.classList.remove('hidden');
  }
});

function toLabel(key) {
  return {
    name: 'Name',
    dob: 'Date of Birth',
    bloodGroup: 'Blood Group',
    father: 'Father',
    issueDate: 'Issue Date',
    validity: 'Validity',
    licenceNo: 'Licence No',
    authority: 'Issuing Authority',
    address: 'Address',
    classes: 'Class(es)'
  }[key] || key;
}
