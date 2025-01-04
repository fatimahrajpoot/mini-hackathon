import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDakZahOv-NuUSCP9COCku5Qr7tFwiu0gw",
  authDomain: "hackathon-2f4de.firebaseapp.com",
  projectId: "hackathon-2f4de",
  storageBucket: "hackathon-2f4de.firebasestorage.app",
  messagingSenderId: "567327682300",
  appId: "1:567327682300:web:7ca9bac7054b35ab747179",
  measurementId: "G-J7H6XPSLPQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAuth(app);