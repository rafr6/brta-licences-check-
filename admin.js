// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCFEpmvsyOm3fmFQQd88CrKbAH944DpJbE",
  authDomain: "brt-licence.firebaseapp.com",
  databaseURL: "https://brt-licence-default-rtdb.firebaseio.com",
  projectId: "brt-licence",
  storageBucket: "brt-licence.appspot.com",
  messagingSenderId: "502685118571",
  appId: "1:502685118571:web:9f727f6c090ceac59c412e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Form Submit Handler
document.getElementById('licenseForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const licenseNumber = document.getElementById('licenseNumber').value;
  const licenseData = {
    ownerName: document.getElementById('ownerName').value,
    fatherName: document.getElementById('fatherName').value,
    dob: document.getElementById('dob').value,
    licenseType: document.getElementById('licenseType').value,
    issueDate: document.getElementById('issueDate').value,
    expiryDate: document.getElementById('expiryDate').value
  };

  set(ref(db, 'licenses/' + licenseNumber), licenseData)
    .then(() => {
      alert("লাইসেন্স সফলভাবে যুক্ত হয়েছে!");
      document.getElementById('licenseForm').reset();
    })
    .catch((error) => {
      alert("ত্রুটি হয়েছে: " + error);
    });
});
