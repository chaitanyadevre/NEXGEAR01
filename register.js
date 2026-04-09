import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBbpBtADqdT9gCGDWHR3MeKmb9kRi2D6rM",
    authDomain: "nexgear-login-a9909.firebaseapp.com",
    projectId: "nexgear-login-a9909",
    storageBucket: "nexgear-login-a9909.firebasestorage.app",
    messagingSenderId: "841556963192",
    appId: "1:841556963192:web:c7884c6897a9ba3a3ba28d",
    measurementId: "G-P5EM1DV583"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerButton = document.getElementById('register-button');

registerButton.addEventListener('click', (event) => { 
    event.preventDefault();

    // Input values hamesha click ke andar honi chahiye
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === "" || password === "") {
        alert("Please enter details");
        return;
    }

    // Firebase Registration logic
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Success!
            alert("Registration Successful!");
            
            // YAHAN REDIRECT HOGA
            window.location.href = "store.html"; 
            // 'store.html' ki jagah apni file ka sahi naam likhen
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});