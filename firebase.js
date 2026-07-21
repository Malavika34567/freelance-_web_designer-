import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBZ2r4kv9H8KndcEedQfD-kKbndOVNttPQ",
  authDomain: "freelance-web-designer-ff920.firebaseapp.com",
  projectId: "freelance-web-designer-ff920",
  storageBucket: "freelance-web-designer-ff920.firebasestorage.app",
  messagingSenderId: "1070959797095",
  appId: "1:1070959797095:web:06845142daa5020b0fc5c2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  try {
    // Save to Firestore
    await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: serverTimestamp()
    });

    // Send Email
    await emailjs.send(
      "Malu@123",          // Service ID
      "template_vjl2ncj",  // Template ID
      data
    );

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

  } catch (error) {
    console.error(error);
    alert("Error: " + error.message);
  }
});
