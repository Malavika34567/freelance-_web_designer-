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
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  console.log("Sending Data:", data);

  try {

    // Save to Firestore
    await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: serverTimestamp()
    });

    // Send Email using EmailJS
    await emailjs.send(
      "Malu@123",
      "template_vjl2ncj",
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message
      },
      {
        publicKey: "j2BjelD_TTXQQUYYq"
      }
    );

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

  } catch (error) {
    console.error("Error:", error);
    alert(error.text || error.message);
  }
});
