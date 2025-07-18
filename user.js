import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFEpmvsyOm3fmFQQd88CrKbAH944DpJbE",
  authDomain: "brt-licence.firebaseapp.com",
  databaseURL: "https://brt-licence-default-rtdb.firebaseio.com",
  projectId: "brt-licence",
  storageBucket: "brt-licence.appspot.com",
  messagingSenderId: "502685118571",
  appId: "1:502685118571:web:9f727f6c090ceac59c412e"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const licenseNumber = document.getElementById('searchInput').value;

  const dbRef = ref(db);
  get(child(dbRef, `licenses/${licenseNumber}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      document.getElementById('result').innerHTML = `
        <h3>লাইসেন্স তথ্য</h3>
        <p><strong>নাম:</strong> ${data.ownerName}</p>
        <p><strong>পিতার নাম:</strong> ${data.fatherName}</p>
        <p><strong>জন্ম তারিখ:</strong> ${data.dob}</p>
        <p><strong>লাইসেন্স ধরন:</strong> ${data.licenseType}</p>
        <p><strong>ইস্যু তারিখ:</strong> ${data.issueDate}</p>
        <p><strong>মেয়াদ শেষ:</strong> ${data.expiryDate}</p>
      `;
    } else {
      document.getElementById('result').innerHTML = "<p>লাইসেন্স পাওয়া যায়নি।</p>";
    }
  }).catch((error) => {
    console.error(error);
    document.getElementById('result').innerHTML = "<p>ত্রুটি ঘটেছে।</p>";
  });
});
