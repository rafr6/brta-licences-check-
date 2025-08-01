
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

function checkLicence() {
  const input = document.getElementById('licenceInput').value.trim();
  const resultDiv = document.getElementById('result');
  const detailsList = document.getElementById('detailsList');
  if (licenseData[input]) {
    const data = licenseData[input];
    detailsList.innerHTML = '';
    for (let key in data) {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${toLabel(key)}:</strong> ${data[key]}`;
      detailsList.appendChild(li);
    }
    resultDiv.classList.remove('hidden');
  } else {
    alert('Licence not found!');
    resultDiv.classList.add('hidden');
  }
}

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
